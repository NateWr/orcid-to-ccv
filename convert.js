const $el = {
    errors: document.getElementById('errors'),
    input: document.getElementById('input'),
    submit: document.getElementById('submit'),
    copy: document.getElementById('copy'),
    copied: document.getElementById('copied'),
}

function convert(str) {
    $el.errors.innerHTML = '';

    let reEntry = new RegExp('(\@[a-z]*\{[^\,]*\,)([^\n]*\}\})', 'g');
    let reMetadata = new RegExp('(\},[a-z ]*=)', 'g');

    const results = [...str.matchAll(reEntry)];

    let errors = [];

    if (!results.length) {
        errors.push('Could not read the input. This only converts bibtex entries from ORCID that are all on the same line. See https://www.notion.so/ORCID-to-CCV-7cfb24c9f13c4d869cd2beb950e9e2e2');
        showErrors(errors);
        return;
    }

    let entries = [];
    results.forEach((entry) => {

        if (typeof entry[2] === 'undefined') {
            errors.push('Sorry, I can\'t convert the following entry: ' + entry[0].join(''));
            return;
        }
        if (entry[2].substr(entry[2].length -2) !== '}}') {
            errors.push('Sorry, I expected to find }} at the end of each entry. Found this instead: ' + entry[2].substr(entry[2].length -2));
            return;
        }

        output = entry[1] + "\n";
        let end = entry[2].substr(entry[2].length - 1);

        let metadata = [];
        let start = true;
        let part = "\t";
        entry[2]
            .substr(0, entry[2].length - 1)
            .split(reMetadata)
            .forEach(fragment => {
                if (start) {
                    part += fragment;
                    start = false;
                } else {
                    const divider = fragment.split(',');
                    metadata.push(part + divider[0]);
                    part = divider[1];
                    start = true;
                }
            });
        output += metadata.join("\n\t");
        output += "\n" + end;

        entries.push(output);
    });

    if (errors.length) {
        showErrors(errors);
        return;
    }

    $el.input.value = entries.join("\n\n");
    $el.copy.setAttribute('style', 'display:inline-block');
}

function showErrors(errors) {
    errors.forEach(error => {
        let $error = document.createElement('p');
        $error.innerHTML = error;
        $el.errors.appendChild($error);
    });
}

function copy() {
    $el.input.select();
    document.execCommand("copy");
    $el.copied.setAttribute('style', 'display:inline-block');
}

$el.submit.addEventListener('click', function(event) {
    convert($el.input.value);
});

$el.copy.addEventListener('click', function(event) {
    copy();
});
