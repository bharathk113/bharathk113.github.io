const MY_CONTEXT = {
  "about_me": "Bharath Reddy K. is a passionate and results-driven Data Scientist with proven expertise in machine learning, statistical analysis, remote sensing, image processing, and geospatial data science. He is adept at building scalable solutions for real-world problems in water resources and environmental monitoring.",
  
  "experience": [
    {
      "company": "National Remote Sensing Centre",
      "role": "Scientist/Engineer - 'SE'",
      "period": "July 2016 onwards",
      "location": "Hyderabad, India",
      "details": [
        "Built reliable drought monitoring models used by government agencies.",
        "Designed ETL pipelines with open-source tools.",
        "Implemented advanced image processing workflows.",
        "Automated satellite data processing at scale.",
        "Streamlined data workflows and operational tasks.",
        "Leveraged multi-source geospatial data for insights.",
        "Developed ML models integrating satellite and field data.",
        "Applied data fusion for robust, reliable analytics."
      ]
    },
    {
      "company": "Regional Remote Sensing Centre",
      "role": "Project Trainee",
      "period": "January 2016 - May 2016",
      "location": "Bangalore, India",
      "details": [
        "Worked on the application of object-based classification techniques for the identification of citrus orchards using Remote Sensing and GIS tools.",
        "Published and presented the work in a conference."
      ]
    }
  ],
  
  "projects": [
    {
      "name": "Water Bodies Information System",
      "description": "Multi satellite and sensor based water bodies surface water spread information system for India. Developed and integrated algorithms for extraction of water spread area, and built a robust Geospatial database. Advanced image processing and machine learning techniques were used to extract water spread area in near real-time from Optical and SAR data (Sentinel-1, 2, Resourcesat, RISAT-1).",
      "tools": ["GDAL", "PostgreSQL", "PostGIS", "Python"]
    },
    {
      "name": "Hydrological Drought Assessment",
      "description": "A National Project to characterize spatiotemporal variability of hydrological drought and provide hydrological drought indices based on geospatial data, model outputs, and field data. Developed multiple hydrological drought indices suitable for the Indian region.",
      "tools": ["GDAL", "Python (scipy, scikit-learn, skimage)", "PostgreSQL", "PostGIS"]
    },
    {
      "name": "Ortho-mosaic generation for India",
      "description": "A 2.5m resolution seamless ortho-rectified image tiles generation using Indian Remote Sensing satellites data. Was responsible for ortho-rectification, pan sharpening, and synthesizing the blue band for the data, which served as base layers for the Indian Geoportal (Bhuvan).",
      "tools": ["PCI GXL", "PCI Geomatica", "ERDAS Imagine", "Python"]
    },
    {
      "name": "Telangana Water Resources Information System (TWRIS)",
      "description": "A comprehensive geo-database of water related data for Telangana State. Developed a technique for identifying cascades of lakes/ponds using GIS and Remote Sensing. Also developed a tool to delineate lake catchments using the D8 Flow direction algorithm.",
      "tools": ["Python", "PostGIS", "PostgreSQL"]
    },
    {
      "name": "UAV Applications for Water",
      "description": "Capacity estimation of minor irrigation tanks using UAV and satellite-based remote sensing. A novel approach was proposed and published to use UAV images to generate Elevation Area Capacity (EAC) curves, which were combined with near real-time satellite data to estimate water volume.",
      "link": "https://link.springer.com/article/10.1007/s12524-020-01164-x"
    },
    {
      "name": "Automatic geometric accuracy evaluator",
      "description": "Developed an orthorectified data geometric accuracy evaluator for quick Quality Control (QC). Used Fourier phase correlation with Log-Polar Transform and template matching using normalized cross-correlation.",
      "tools": []
    }
  ],
  
  "skills": {
    "languages_databases": ["Python", "PostgreSQL", "PostGIS", "C", "Matlab"],
    "libraries": ["NumPy", "OpenCV", "scikit-learn", "matplotlib", "scipy", "numba", "GDAL & OGR"],
    "geospatial_software": ["QGIS", "ArcGIS", "ERDAS", "PCI Geomatica", "Ecognition", "Orfeo Toolbox"],
    "other": ["Latex & Beamer"]
  },
  
  "education": [
    {
      "degree": "Master of Technology in Data Science & Engineering",
      "institution": "Birla Institute of Technology And Science, Pilani (BITS Pilani)",
      "location": "Hyderabad, India",
      "courses": ["Machine Learning", "Natural Language Processing", "Deep Learning", "Big Data Systems"]
    },
    {
      "degree": "Bachelor of Technology in Physical Sciences",
      "institution": "Indian Institute of Space Science and Technology",
      "location": "Trivandrum, Kerala, India",
      "courses": ["Remote Sensing", "Geographic Information Systems", "Digital Image Processing", "Atmospheric Sciences"]
    }
  ],
  
  "achievements": [
    {
      "name": "Student Merit Scholarship",
      "description": "Awarded scholarship for 8 consecutive semesters by Department of Space, Government of India. 120 out of 150,000 meritorious applicants received this grant."
    },
    {
      "name": "National Water Mission Award for 2019",
      "description": "Part of the Telangana Water Resources Information System (TWRIS) project, which was awarded 2nd Prize under the category 'Comprehensive Water Data Base in Public Domain'."
    },
    {
      "name": "Brilliant grade",
      "description": "Rated as Brilliant (Grade: 10/10) for contributions to the organization for the years 2024, 2022, 2021, & 2020."
    },
    {
      "name": "Outstanding grade",
      "description": "Rated as Outstanding (Grade: 9/10) for contributions to the organization for the years 2023, 2019, 2018, 2017, & 2016."
    }
  ],

  // I've parsed this from the commented-out static list in your HTML
  "publications": [
    {
      "title": "Capacity estimation of irrigation tanks through remote sensing from UAV platform.",
      "year": 2020,
      "link": "https://doi.org/10.1007/s12524-020-01164-x",
      "citation": "Bharath, K., Hakeem, K.A., Raghavendra, K. et al. J Indian Soc Remote Sens 48, 1403–1411 (2020)."
    },
    {
      "title": "Accuracy Assessment and Normalisation of Water Spread Area Estimate from Multi-sensor Satellite Data.",
      "year": 2020,
      "link": "https://doi.org/10.1007/s12524-020-01185-6",
      "citation": "Kompella, S., Bharath, K., Abdul Hakeem, K. et al. J Indian Soc Remote Sens 48, 1601–1611 (2020)."
    },
    {
      "title": "Region Growing based Automatic Localized Adaptive Thresholding Algorithm for Water Extraction.",
      "year": 2020,
      "type": "Internal Report: Algorithm Theoretical Basis Document"
    },
    {
      "title": "Standardized Runoff Index Product for Hydrological Drought Assessment.",
      "year": 2020,
      "type": "Internal Report: Algorithm Theoretical Basis Document"
    },
    {
      "title": "Standardised Groundwater Index for Hydrological Drought Assessment.",
      "year": 2019,
      "type": "Internal Report: Algorithm Theoretical Basis Document"
    },
    {
      "title": "Retrieval of Land Cover Management Practices Information for SWAT Model at a National scale.",
      "year": 2019,
      "conference": "SWAT Conference, 2019, Vienna",
      "link": "https://swat.tamu.edu/media/116376/book-of-abstracts-20190814.pdf"
    },
    {
      "title": "Object based classification techniques for citrus orchards.",
      "year": 2016,
      "link": "https://isgindia.org/JOG/abstracts/APR-2016/pap011.pdf",
      "citation": "Kadapala Bharath Kumar Reddy , J. Mohammed Ahamed , R. Hebbara , Uday Raj and Rama Rao. Journal of Geomatics Vol 10 No. 1 April 2016."
    }
  ]
};