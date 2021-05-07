# ORCID-to-CCV Converter

Convert an ORCID export of bibliographic entries to a BIBTEX format that can be ingested into [CCV](https://ccv-cvc.ca/indexresearcher-eng.frm).

Inspired by @AhemNason's [tweet](https://twitter.com/AhemNason/status/1390732724437143557) and [documentation](https://www.notion.so/ORCID-to-CCV-7cfb24c9f13c4d869cd2beb950e9e2e2).

## Example

This was not tested much. It works for the following example ORCID export entries.

```
@article{Hatherill_2020,doi = {10.1629/uksg.514},url= {https://doi.org/10.1629%2Fuksg.514},year = 2020,publisher = {Ubiquity Press, Ltd.},volume = {33},author={Jeanette Hatherill},title = {`At-risk articles': the imperative to recover lost science},journal = {Insights the {UKSG} journal}}
@article{Blight2017,title = {Poly High Internal Phase Emulsion for the Immobilization of Chemical Warfare Agents},journal = {ACS Applied Materials and Interfaces},year = {2017},volume = {9},number = {37},pages = {31335-31339},author = {Wright, A.J. and Main, M.J. and Cooper, N.J. and Blight, B.A. and Holder, S.J.}},
@article{Hatherill_2021,doi = {10.1629/uksg.514},url= {https://doi.org/10.1629%2Fuksg.514},year = 2020,publisher = {Ubiquity Press, Ltd.},volume = {33},author={Jeanette Hatherill},title = {`At-risk articles': the imperative to recover lost science},journal = {Insights the {UKSG} journal}}

@article{Hatherill_2022,doi = {10.1629/uksg.514},url= {https://doi.org/10.1629%2Fuksg.514},year = 2020,publisher = {Ubiquity Press, Ltd.},volume = {33},author={Jeanette Hatherill},title = {`At-risk articles': the imperative to recover lost science},journal = {Insights the {UKSG} journal}}


@article{Hatherill_2023,doi = {10.1629/uksg.514},url= {https://doi.org/10.1629%2Fuksg.514},year = 2020,publisher = {Ubiquity Press, Ltd.},volume = {33},author={Jeanette Hatherill},title = {`At-risk articles': the imperative to recover lost science},journal = {Insights the {UKSG} journal}}
@inproceedings{nason2020metadata, title= {Metadata Matters}, author= {Nason, Michael and Collins, Susan}, booktitle= {PKP Scholarly Publishing Conference 2019}, year= {2020}}
,
@inproceedings{nason2019things, title= {Where Things Stand: PKP/Crossref Collaboration and Improvements for Crossref Members}, author= {Nason, Michael and Collins, Susan}, booktitle= {PKP Scholarly Publishing Conference 2019}, year= {2019}}
,
@inproceedings{nason2015markdown, title= {Markdown as a Simple Solution for HTML and PDF Galleys in OJS}, author= {Nason, Michael}, booktitle= {PKP Scholarly Publishing Conference 2015}, year= {2015}}
,
@phdthesis{nason2012ties, title= {The ties that bind}, author= {Nason, Michael}, year= {2012}, school= {University of New Brunswick.}}
```
