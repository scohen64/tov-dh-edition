// FIXED FILE ID
var FILE_ID = "1JBfSFEuurcuzIx0C-O5RpfmkBkYQ7dgm";

// STATIC CHAPTER LIST
var CHAPTERS = [
  { n: "I", title: "Talmud Torah and Communal Learning" },
  { n: "II", title: "Governance and Judicial Regulations" },
  { n: "III", title: "Communal Finance and Taxation" },
  { n: "IV", title: "Family Law and Social Boundaries" }

];

// STATIC CONCEPT LIST
var CONCEPTS = [
  "Academy regulations",
  "Appeals",
  "Betrothal coercion",
  "Clothing",
  "Commerce",
  "Community meetings",
  "Conflicts of interest",
  "Defamation",
  "Education",
  "External courts",
  "Festive imitations",
  "Gentile authorities",
  "Governance",
  "Informers",
  "Judicial intimidation",
  "Judges",
  "Lineage slander",
  "Marriage",
  "Meat and wine tax",
  "Rabbis",
  "Social boundaries",
  "Synagogue",
  "Synagogue violence",
  "Talmud Torah fund",
  "Tax evasion",
  "Tax exemptions",
  "Taxes",
  "Teachers and pupils",
  "Widows and orphans",
  "Wine commerce"
];

// MAIN PAGE
function doGet() {
  var html = `
  <html>
  <head>
    <style>
      <style>
    * { box-sizing: border-box; }
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px 20px;
      background: #f5f5f5;
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h1 { 
      color: #4a2b00; 
      margin-top: 0;
      border-bottom: 3px solid #4a2b00;
      padding-bottom: 15px;
    }
    .intro {
      font-size: 15px;
      line-height: 1.6;
      color: #555;
      margin-bottom: 30px;
      background: #fff9e6;
      padding: 15px;
      border-left: 4px solid #d4a017;
      border-radius: 4px;
    }
    .section {
      margin: 25px 0;
      padding: 20px;
      background: #fafafa;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
    }
    .section h3 {
      margin-top: 0;
      color: #333;
      font-size: 18px;
    }
    select, input, button {
      padding: 10px 15px;
      font-size: 15px;
      border: 2px solid #ddd;
      border-radius: 4px;
      margin: 5px 0;
    }
    select {
      min-width: 350px;
      cursor: pointer;
      background: white;
    }
    select:hover {
      border-color: #4a2b00;
    }
    select:focus {
      outline: none;
      border-color: #4a2b00;
      box-shadow: 0 0 0 3px rgba(74, 43, 0, 0.1);
    }
    input[type="text"] {
      min-width: 300px;
    }
    button {
      background: #4a2b00;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
      padding: 10px 25px;
      transition: background 0.3s;
    }
    button:hover {
      background: #6b3e00;
    }
    button:active {
      background: #2a1600;
    }
    .results {
      margin-top: 30px;
    }
    .results h2 {
      color: #4a2b00;
      border-bottom: 2px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .clauseBox {
      padding: 20px;
      margin: 15px 0;
      background: white;
      border-left: 4px solid #4a2b00;
      border-radius: 4px;
      line-height: 1.7;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      font-size: 15px;
    }
    .clauseBox .clause-id {
      font-size: 12px;
      color: #999;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .clauseBox .concepts {
      margin-top: 12px;
      font-size: 13px;
    }
    .concept-tag {
      display: inline-block;
      background: #e8f5e9;
      color: #2e7d32;
      padding: 3px 10px;
      border-radius: 12px;
      margin: 3px;
      font-size: 12px;
    }
    .loading {
      color: #666;
      font-style: italic;
      padding: 20px;
      text-align: center;
    }
    .error {
      color: #d32f2f;
      background: #ffebee;
      padding: 15px;
      border-radius: 4px;
      border-left: 4px solid #d32f2f;
    }
    .success {
      color: #2e7d32;
      background: #e8f5e9;
      padding: 15px;
      border-radius: 4px;
      border-left: 4px solid #2e7d32;
    }
    .no-results {
      color: #666;
      padding: 20px;
      text-align: center;
      font-style: italic;
    }
    .search-container {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📜 Takkanot of Valladolid (1432)</h1>
    
    <div class="intro">
      <strong>Welcome!</strong> Explore the Takkanot by browsing chapters, filtering by concepts,
      or searching any word that appears in the original text. This interface
      makes the legal and communal vocabulary accessible for study and research.
    </div>
    

    <h2>Search by Chapter</h2>
    <select id="chapterSelect" onchange="loadChapter()">
      <option value="">Select chapter</option>
      ${CHAPTERS.map((c, i) => 
        `<option value="${i}">${c.n}. ${c.title}</option>`
      ).join("")}
    </select>

    <h2>Search by Concept</h2>
    <select id="conceptSelect" onchange="loadConcept()">
      <option value="">Select concept</option>
      ${CONCEPTS.map(c => `<option value="${c}">${c}</option>`).join("")}
    </select>

    <h2>Search by Keyword</h2>
    <input id="keyword" placeholder="Search words in the takkanot..." onkeyup="searchKeyword()" />

    <div id="results"></div>

    <script>
      function loadChapter() {
        let idx = document.getElementById("chapterSelect").value;
        google.script.run.withSuccessHandler(update).getChapter(idx);
      }

      function loadConcept() {
        let c = document.getElementById("conceptSelect").value;
        google.script.run.withSuccessHandler(update).getConcept(c);
      }

      function searchKeyword() {
        let q = document.getElementById("keyword").value;
        google.script.run.withSuccessHandler(update).searchText(q);
      }

      function update(html) {
        document.getElementById("results").innerHTML = html;
      }
    </script>

  </body>
  </html>
  `;

  return HtmlService.createHtmlOutput(html);
}

// LOAD XML
function loadXML() {
  var file = DriveApp.getFileById(FILE_ID);
  var xml = file.getBlob().getDataAsString();
  return XmlService.parse(xml).getRootElement();
}

// GET CHAPTER CONTENT
function getChapter(index) {
  var root = loadXML();
  var chapters = root.getChildren("chapter");
  
  if (!chapters[index]) return "No data.";

  var ch = chapters[index];
  var html = `<h2>${ch.getAttribute("n").getValue()}. ${ch.getAttribute("title").getValue()}</h2>`;

  var subs = ch.getChildren("subsection");
  subs.forEach(s => {
    html += `<h3>${s.getAttribute("title").getValue()}</h3>`;
    s.getChildren("clause").forEach(cl => html += renderClause(cl));
  });

  return html;
}

// FIND CLAUSES BY CONCEPT
function getConcept(target) {
  if (!target) return "";

  var root = loadXML();
  var html = `<h2>Concept: ${target}</h2>`;
  var matches = [];

  var all = root.getDescendants();
  all.forEach(node => {
    var el = node.asElement();
    if (!el || el.getName() !== "clause") return;

    var conceptsEl = el.getChild("concepts");
    if (!conceptsEl) return;

    var tags = conceptsEl.getChildren("concept");
    for (var j = 0; j < tags.length; j++) {
      if (tags[j].getText().trim() === target) {
        matches.push(el);
      }
    }
  });

  if (matches.length === 0) return html + "<p>No clauses found.</p>";

  matches.forEach(cl => html += renderClause(cl));

  return html;
}

// SEARCH TEXT
function searchText(q) {
  if (!q || q.trim() === "") return "<p>Type to search.</p>";

  var root = loadXML();
  var lower = q.toLowerCase();
  var results = [];

  var all = root.getDescendants();
  all.forEach(node => {
    var el = node.asElement();
    if (!el || el.getName() !== "clause") return;

    var orig = el.getChildText("text_original") || "";
    var mod = el.getChildText("text_modern") || "";

    if (orig.toLowerCase().includes(lower) || mod.toLowerCase().includes(lower)) {
      results.push(el);
    }
  });

  if (results.length === 0) return "<p>No matches found.</p>";

  var html = `<h2>Search results for "${q}"</h2>`;
  results.forEach(cl => html += renderClause(cl));

  return html;
}

// RENDER CLAUSE BLOCK
function renderClause(cl) {
  var id = cl.getAttribute("id") ? cl.getAttribute("id").getValue() : "";
  var orig = cl.getChildText("text_original") || "";
  var mod = cl.getChildText("text_modern") || "";

  return `
    <div class="box">
      <div class="title">${id}</div>
      <div>${escape(mod)}</div>
      <div class="orig">${escape(orig)}</div>
    </div>
  `;
}

// ESCAPE HTML
function escape(s) {
  return s.replace(/[&<>]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[c]));
}
