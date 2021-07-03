const projectList = [
  {
    project: "IPU Result",
    points: [
      {
        text: 'Webapp and Android app for GGSIPU students to check results.'
      },
      {
        text: 'Crawls GGSIPU result website for pdf and extracts results from pdf, saves data as json file.'
      },
      {
        text: 'Setup API for fetching results and makes API request for students\'s result.'
      }
    ],
    techStack: ['Reactjs','Python','BeautifulSoup','pdftotext','Android'],
    src: "memory-simulator.gif",
    links: [
      {
        link:"https://github.com/Tushark21/ipu-result",
        text:"Source Code"
      },
      {
        link:"https://github.com/Tushark21/ipu-result",
        text:"Deploy"
      },
      {
        link:"https://github.com/Tushark21/ipu-result",
        text:"Android App"
      },
    ]
  },
  {
    project: "React Race",
    points: [
      {
        text: 'Car game in reactjs using key and touch events and hand tracking.'
      },
      {
        text: 'Integrated hand tracking for controlling car movements using tensorflow\'s handpose model.'
      }
    ],
    techStack: ['HTML','CSS','Reactjs','Tensorflow'],
    src: "memory-simulator.gif",
    links: [
      {
        link:"https://github.com/Tushark21/react-race",
        text:"Source Code"
      },
      {
        link:"https://github.com/Tushark21/react-race",
        text:"Deploy"
      },
    ]
  },
  {
    project: "Similar Question Ranking",
    points: [
      {
        text: 'Finds semantically similar question to an input question and rank them based on similarity.'
      },
      {
        text: 'Similarity is computed by embedding texts and computing cosine similarity.'
      },
      {
        text: 'Models used: SBERT model, USE model and weighted combination of both.'
      }
    ],
    techStack: ['Python','BeautifulSoup','Pandas','Tensorflow'],
    src: "memory-simulator.gif",
    links: [
      {
        link:"https://github.com/Tushark21/datamining_project",
        text:"Source Code"
      },
    ]
  },
  {
    project: "Memory Allocation Simulator",
    points: [
      {
        text: 'Contiguous Memory Allocation Simulation for comparing standard memory allocation algorithms.'
      },
      {
        text: 'Implemented round robin process management technique along with first fit and worst fit algorithms.'
      },
      {
        text: 'Modified and implemented Worst Fit memory allocation algorithm for comparing with standard algorithms.'
      }
    ],
    techStack: ['C++','STL'],
    src: "memory-simulator.gif",
    links: [
      {
        link:"https://github.com/Tushark21/Simple-C-/blob/master/Memory%20Allocation%20Simulation.cpp",
        text: "Source Code"
      }
    ]
  },
  {
    project: "Focused Crawler",
    points: [
      {
        text: 'Focused web crawler with web searching module (Search Engine).'
      },
      {
        text: 'Implemented fish search algorithm for crawling web pages and web indexing.'
      },
      {
        text: 'Stores indexed web data in database.'
      }
    ],
    techStack: ['Python','BeautifulSoupand','SQL','TkInter'],
    src: "crawler.gif",
    links: [
      {
        link:"https://github.com/Tushark21/Focused-Crawler",
        text: "Source Code"
      }
    ]
  },
  {
    project: "Semantic Parser",
    points: [
      {
        text: 'Semantic Parser based on LR parsing scheme to parse and extract the meaning of an input string.'
      },
      {
        text: 'Validates the syntax of string according to the given grammar and returns its context/meaning.'
      }
    ],
    techStack: ['Java','SQL','JDBC'],
    src: "parser.gif",
    links: [
      {
        link:"https://github.com/Tushark21/Semantic-Parser",
        text: "Source Code"
      }
    ]
  },
  {
    project: "Plane Buster",
    points: [
      {
        text: 'Build 2D Plane Buster game using key events and sound playbacks.'
      },
      {
        text: 'Implemented using pygame package in python.'
      }
    ],
    techStack: ['Python','Pygame'],
    src: "plane.gif",
    links: [
      {
        link:"https://github.com/Tushark21/Games/tree/master/Play%20Python/Plane%20Buster",
        text: "Source Code"
      }
    ]
  },
];

export default projectList;