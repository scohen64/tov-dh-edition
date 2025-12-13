# Digital Edition of the Takkanot of Valladolid (1432)

This repository contains the Digital Humanities edition of the *Takkanot of Valladolid* (ToV), enacted in 1432 under the reign of Juan II. The ordinances document how Castilian Jews negotiated their communal existence within a Christian political order. The project uses TEI XML, semantic coding, and Apps Script based interfaces to model the legal, linguistic, and conceptual structures of the corpus. The dataset, workflow, and documentation follow DH standards of transparency and reproducibility. The analysis draws from the historical and methodological framework presented in Cohen's study of the Valladolid ordinances :contentReference[oaicite:1]{index=1}.

The goal of this repository is to provide an open, reusable resource for scholars of medieval Iberian Judaism, minority legal cultures, and Digital Humanities. It includes the TEI encoded text, the semantic codebook, the Apps Script used to generate the interactive interface, and methodological notes.

---

## Project Links

* **Interactive Digital Interface**
  [TEI-based searchable edition](https://script.google.com/macros/s/AKfycbyk16cPSYrQr6Y9YFQf6eJTtM8lSNTOZ656T2sToQNC2S6AjOQLvqDGgKn1F0FZG7XJ7Q/exec)

* **Personal website** (project overview):  
  [Personal website](https://shaicohen.net) 🔗

* **Sephardi Spaces** (public facing GIS digital initiative):  
  [Sephardi Spaces](https://sepharad.miami.edu) ↗

* **SIDE CULTURES Spain Research Group** (institutional context of the project):  
  https://side-cultures.com

More links will be added as additional components are published.

---

## Contents of the Repository

**data/xml**  
Contains the TEI compliant XML corpus of the Valladolid Takkanot. The encoding follows TEI guidelines and includes clause level segmentation, terminological tagging, and controlled vocabularies.

**code/appsscript**  
Contains the Google Apps Script files used to build the web interface that displays and searches the segmented text. These scripts support the internal DH workflow but are also included as reference material for reproducibility.

**docs**  
Contains documentation related to methodology, conceptual modeling, semantic coding, and future development plans.

---

## Project Description

The Takkanot of Valladolid are one of the most detailed examples of Jewish communal self regulation in late medieval Castile. They articulate strategies of internal cohesion, economic oversight, and interreligious boundary management. Their hybrid linguistic profile, which integrates Hebrew legal terminology with Judeo Spanish phrasing and occasional Arabic and Latin elements, reflects the multicultural environment of fifteenth century Iberia.

The dataset in this repository was created by extracting and segmenting the ordinances, normalizing terminology, and encoding each clause using TEI XML. This workflow enables comparative analysis of legal concepts such as *herem*, *malsin*, *parnas*, *tashlumin*, and *minhag*, as documented in the study underlying this project :contentReference[oaicite:2]{index=2}.

The repository also supports broader DH goals, including transparency in editorial decisions, reproducible semantic coding, and cross linguistic mapping. It complements ongoing work in the SIDE CULTURES Spain Research Group and the public facing Sephardic Spaces platform.

---

## Citation

If you use this repository, please cite as:

**Cohen, Shai.** *Digital Edition of the Takkanot of Valladolid (1432).* GitHub repository.  
Link to be added once DOI is assigned.

For the analytical framework, cite the associated research article:

**Cohen, Shai.** *The Terms of their Existence: The Takkanot of Valladolid and the Negotiation of Jewish Identity under Christian Medieval Power.*  
[Paper link will be added upon publication]

---

## How to Use the Repository

1. The TEI file `tov.xml` can be opened in any XML editor or DH platform.  
2. The Apps Script files may be imported into Google Apps Script for inspection or adaptation.  
3. The documentation folder contains guidelines for extending the codebook, updating terminology, and preparing additional corpora.

---

## Future Additions

* DOI via Zenodo  
* Additional takkanot corpora for comparative analysis  
* Visualization tools for conceptual networks  
* Updated version of the semantic codebook  
* Link to the final published article

---

Future Editions: Judeo Spanish Linguistic and Cultural Analysis
1. Structural Analysis of Judeo Spanish as a Marker of Communal Identity
Future work will examine how the Valladolid Takkanot employ Judeo Spanish (Old Castilian written in Hebrew script) as a linguistic vehicle for expressing internal cohesion and communal autonomy. The corpus combines Hebrew legal terminology with Romance syntax, a pattern noted in the manuscript, where Hebrew lexemes such as herem, malsin, and minhag appear embedded within Judeo Spanish phrasing. This hybrid register will be analyzed as a cultural strategy that affirms Jewish distinctiveness while signaling adaptation to the dominant Christian linguistic environment.

2. Comparative Mapping between Judeo Spanish, Medieval Castilian, and Parallel Jewish Languages
A future edition will include systematic comparisons between terms in the Valladolid corpus and their semantic relationships to medieval Castilian, Judeo Arabic, and other Judeo Romance varieties. The manuscript already highlights cross linguistic clusters such as nefesh, nafs, neshama, and alma, which reveal conceptual exchanges across Hebrew, Arabic, and Romance intellectual traditions. Extending this approach will allow the project to trace how Sephardic communities responded to social constraints by adapting or transforming lexicon, idioms, and legal formulae inherited from both Andalusi and Christian traditions.

3. Language as a Tool of Inclusion and Exclusion in Communal Governance
Consistent with SIDE CULTURES Spain’s research focus, the project will analyze how linguistic choices in the Takkanot encode inclusion and exclusion. The manuscript demonstrates that terms such as malsin, no judío, and relational vocabulary concerning Christians and Muslims operate not only as descriptive labels but as discursive tools that structure social boundaries. Future work will model these linguistic patterns computationally to examine how Judeo Spanish legal language frames the community’s internal hierarchy and its regulated interactions with Christian and Muslim neighbors, thereby revealing the cultural logic of minority governance.

---

## Contact

For questions regarding the dataset, methodology, or collaborations:  
**Shai Cohen**  
Senior Lecturer of Spanish, Hebrew, and Sephardic Studies
Interim Director, The Eleonore Graves Tripp Modern Languages Laboratory and Media Center
Coordinator, University of Miami Virtual Immersion Program
Coordinator, MLL Internship
Founding Director, Sephardi Spaces: https://sepharad.miami.edu/
SIDE-CULTURE SP National Project: https://side-cultures.com/
Personal web, https://shaicohen.net

5202 University Drive
Merrick Building, Suite 115
Coral Gables, FL 33146
Tel: (305) 284 2288
Department of Modern Languages and Literatures
College of Arts & Sciences, University of Miami

LinkedIn: https://www.linkedin.com/in/shai-cohen-7133052a/
Orcid: 0000-0002-1367-6718 


