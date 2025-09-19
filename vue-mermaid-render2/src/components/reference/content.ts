
export const content_dic = {
	
_00001: {

 title: "LR",
 code:`
 flowchart LR
    Start --> Stop
 `
 },

_00002: {

 title: "TD",
 code:`
 flowchart TD
    Start --> Stop
 `
 },

_00003: {

 title: "COLOR",
 code:`
 %%{init: { 'theme': 'dark' } }%%
 flowchart LR
    A:::foo & B:::bar --> C:::foobar
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f
    classDef foo fill:#f96
 `
 },

_00004: {

 title: "COMPLEX",
 code:`
 %%{init: { 'theme': 'dark' , 'layout': 'elk'} }%%
 flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
 `
 },


_00005: {

 title: "GRAPH",
 code:`
flowchart LR
    subgraph subgraph1
        direction TB
        top1[top] --> bottom1[bottom]
    end
    subgraph subgraph2
        direction TB
        top2[top] --> bottom2[bottom]
    end
    %% ^ These subgraphs are identical, except for the links to them:

    %% Link *to* subgraph1: subgraph1 direction is maintained
    outside --> subgraph1
    %% Link *within* subgraph2:
    %% subgraph2 inherits the direction of the top-level graph (LR)
    outside ---> top2
 `
 },


_00006: {

 title: "SHAPE",
 code:`
 flowchart RL
    A@{ shape: manual-file, label: "File Handling"}
    B@{ shape: manual-input, label: "User Input"}
    C@{ shape: docs, label: "Multiple Documents"}
    D@{ shape: procs, label: "Process Automation"}
    E@{ shape: paper-tape, label: "Paper Records"}
    A@{ shape: subproc, label: "This is a subprocess" }
 `
 },

_00007: {

 title: "EDGE",
 code:`
flowchart LR
    A o--o B
    B <--> C
    C x--x D
    X -.-> Y
    Y e1@==> J
    e1@{ animate: true }
    J == text ==> L
 `
 },

_00008: {

 title: "SOME THING",
 code:`
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange

 `
 },


_00009: {

title: "ORGNAZATION 1",
code:`
flowchart TD
    A[Christmas] --- B[Go shopping]
    B e0@---  C[Let me think]
    C e1@---  D[Laptop]
    C e2@---  E[iPhone]
    C e3@---  F[Car]
    C e4@---  G[Test]
    e0@{ curve: stepAfter }
    e1@{ curve: stepAfter }
    e2@{ curve: stepAfter }
    e3@{ curve: stepAfter }
    e4@{ curve: stepAfter }
    B e20@---  H[Let me think]
    H e21@---  I[Laptop]
    H e22@---  J[iPhone]
    H e23@---  K[Car]
    H e24@---  L[Test]
    e21@{ curve: stepAfter }
    e22@{ curve: stepAfter }
    e23@{ curve: stepAfter }
    e24@{ curve: stepAfter }
    e20@{ curve: stepAfter }

 `
 },

 /*  curve
basis
bumpX
bumpY
cardinal
catmullRom
linear
monotoneX
monotoneY
natural
step
stepAfter
stepBefore
*/
  
_00010: {

title: "ORGNAZATION 2",
code:`
%%{ init: { 
     'layout': 'dagre',
     'flowchart': { 'curve': 'stepAfter',
	                   'rankSpacing':120
} } 
}%%
flowchart TD
    A[Christmas] --- B[Go shopping]
    B ---  X[Let me think]
    B ---  Y[Let me think]
    B ---  C[Let me think]
    C e01@---  D[Laptop]
    C e02@---  E[iPhone]
    C ---  F[Car]
    C e03@---  G[Test]
    B ---  H[Let me think]
    H ---  I[Laptop]
    H ---  J[iPhone]
    H ---  K[Car]
    H ---  L[Test]
    e01@{ curve: linear }
    e02@{ curve: linear }
    e03@{ curve: linear }
    A@{ shape: cloud , label  : "CLOUD"}
    X@{ label: "GUSA" }
 `
 },
/*
_00010: {

 title: "ORGNAZATION",
 code:`
%%{ init: { 'flowchart': { 'curve': stepAfter' } } }%%
flowchart TD
    A[Christmas] --- B[Go shopping]
    B e01@---  X[Let me think]
    B e02@---  Y[Let me think]
    B e03@---  C[Let me think]
    C e04@---  D[Laptop]
    C e05@---  E[iPhone]
    C e06@---  F[Car]
    C e07@---  G[Test]
    B e08@---  H[Let me think]
    H e09@---  I[Laptop]
    H e10@---  J[iPhone]
    H e11@---  K[Car]
    H e12@---  L[Test]
    e01@{ curve: stepAfter }
    e02@{ curve: stepAfter }
    e03@{ curve: stepAfter }
    e04@{ curve: stepAfter }
    e05@{ curve: stepAfter }
    e06@{ curve: stepAfter }
    e07@{ curve: stepAfter }
    e08@{ curve: stepAfter }
    e09@{ curve: stepAfter }
    e10@{ curve: stepAfter }
    e11@{ curve: stepAfter }
    e12@{ curve: stepAfter }
 `
 },
*/

_00011: {

 title: "ORGNAZATION 3",
 code:`
%%{
  init: {
    "theme": "dark",
    "fontFamily": "monospace",
    "logLevel": "info",
    "flowchart": {
      "htmlLabels": true,
      "curve": "linear"
    },
    "sequence": {
      "mirrorActors": true
    }
  }
}%%
stateDiagram-v2
    state "CEO" as ceo
    state "T. H. Eboss" as ceo
    ceo --> devmngr
    ceo --> admmngr
    ceo --> law


    state "Dev. Manager" as devmngr
    state "Alice" as devmngr
    devmngr --> dev

    state "Development Team" as dev
    state "Bob" as dev
    state "Charles" as dev
    state "David" as dev
    state "Eveline" as dev

    state "Adm. Manager" as admmngr
    state "Florence" as admmngr
    admmngr --> adm

    state "Administration Team" as adm
    state "Grace" as adm
    state "Holt" as adm
    state "Ivan" as adm

    state "Lawyer" as law
    state "John" as law

 `
 },

_00012: {

 title: "BIG EXSAMPLE",
 code:`
%%{ init: { 
     'layout': 'dagre'
 } 
}%%
graph TD;
classDef sut stroke:#0A0;
subgraph ext["Public facing"]
direction LR
ex_api["External api"]
end
subgraph peers[" "]
direction LR
subgraph Our Domain
direction LR
a["Foo"]:::sut --> db_a[("state")]:::sut
b["Bar"] --> db_b[("state")]
ex_api --> a
a -->|local| b
end 
style peers fill:#0000, stroke:#0000
subgraph Peer Domain
direction LR
peer_a["Baz"] --> peer_a_db[("state")]
a -->|peer| peer_a
end
end
subgraph legacy["legacy systems"]
direction LR
leg_d["Qux"] --> leg_d_db[("state")]
a -->|legacy| leg_d
end
deps@{ shape: st-rect, label: "other services" }
b --> deps
peer_a --> deps
 `
 },


_00101: {

 title: "BASIC",
 code:`
 sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
 `
 },

_00102: {

 title: "ACTOR",
 code:`
 sequenceDiagram
    actor Alice
    actor Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice 
    `
 },

_00103: {

 title: "NESTED",
 code:`
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you ?
    Bob->>Alice: Fine, thank you. And you?
    create participant Carl
    Alice->>Carl: Hi Carl!
    create actor D as Donald
    Carl->>D: Hi!
    destroy Carl
    Alice-xCarl: We are too many
    destroy Bob
    Bob->>Alice: I agree
 `
 },

_00104: {

 title: "GROUP BOX",
 code:`
 sequenceDiagram
    box LightYellow Alice & John
    participant A
    participant J
    end
    box Another Group
    participant B
    participant C
    end
    A->>J: Hello John, how are you?
    J->>A: Great!
    A->>B: Hello Bob, how is Charley?
    B->>C: Hello Charley, how are you?

 `
 },

_00201: {

 title: "BASIC",
 code:`
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d

 `
 },
_00202: {

 title: "COMPLEX",
 code:`
 gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h

 `
 },

_00301: {

 title: "PIE CHART",
 code:`
 pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
 `
 },

_00302: {

 title: "QUAD CHART",
 code:`
quadrantChart
  title Reach and engagement of campaigns
  x-axis Low Reach --> High Reach
  y-axis Low Engagement --> High Engagement
  quadrant-1 We should expand
  quadrant-2 Need to promote
  quadrant-3 Re-evaluate
  quadrant-4 May be improved
  Campaign A: [0.9, 0.0] radius: 12
  Campaign B:::class1: [0.8, 0.1] color: #ff3300, radius: 10
  Campaign C: [0.7, 0.2] radius: 25, color: #00ff33, stroke-color: #10f0f0
  Campaign D: [0.6, 0.3] radius: 15, stroke-color: #00ff0f, stroke-width: 5px ,color: #ff33f0
  Campaign E:::class2: [0.5, 0.4]
  Campaign F:::class3: [0.4, 0.5] color: #0000ff
  classDef class1 color: #109060
  classDef class2 color: #908342, radius : 10, stroke-color: #310085, stroke-width: 10px
  classDef class3 color: #f00fff, radius : 10

 `
 },
_00401: {

 title: "BASIC",
 code:`

mindmap
Root
    A
        B
      C

 `
 },
_00402: {

 title: "COMPLEX",
 code:`
mindmap
Root((mindmap))
    Origins
      Long history
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
 `
 },

_00501: {

 title: "BASIC",
 code:`
xychart
title "Sales Revenue"
x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
y-axis "Revenue (in $)" 4000 --> 11000
bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]

 `
 },
_00502: {

 title: "COMPLEX",
 code:`
xychart
title "Different Colors in xyChart"
x-axis "categoriesX" ["Category 1", "Category 2", "Category 3", "Category 4"]
y-axis "valuesY" 0 --> 50
%% Black line
line [10,20,30,40]
%% Blue bar
bar [20,30,25,35]
%% Green bar
bar [15,25,20,30]
%% Red line
line [5,15,25,35]
 `
 },

//------------------------------------------------
_00500: {

 title: "",
 code:`
 `
 },
//------------------------------------------------

};

/*
export const content_dic = {

_00001: `

%%{init: { 'theme': 'dark' , 'title': 'TEST'} }%%

graph TD
    A[Enter Chart Definition] --> B(Preview)
    B --> C{decide}
    C --> D[Keep]
    C --> E[Edit Definition]
    E --> B
    D --> F[Save Image and Code]
    F --> B

`,
   _00002: "BBBBB",
   _00003: "CCCCC",
   _00004: "DDDDD",
   _00005: "EEEEE",
   _00006: "FFFFF",

 };

*/
