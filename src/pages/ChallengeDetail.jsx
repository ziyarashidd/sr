import { useParams } from 'react-router-dom';

const challengeData = [
  {
    title: "Simulation/Modelling of Forest Fire Spread using AI/ML techniques",
     description: `Overview
Simulation/Modelling of Forest Fire Spread using AI/ML techniques
Uncontrolled forest fires represent a significant challenge for government agencies tasked with preserving biodiversity and maintaining air quality. The spread of such fires is influenced by factors including weather conditions (temperature, precipitation, humidity, wind), terrain (slope, aspect, fuel availability), and human activity. With modern geospatial technologies, datasets from the Forest Survey of India and global services like VIIRS-SNP are accessible. Despite this, real-time simulation and forecasting remain complex. Short-term forecasting and dynamic simulation are crucial for timely preventive measures. AI/ML techniques offer promising capabilities to extract insights, helping planners estimate damage, prioritize containment, and mitigate fire impacts.

Objective:
Prepare a forest fire probability map for the next day for a chosen region (e.g., Uttarakhand). Generate a binary classification map (fire/no fire).
Simulate the spread of fire within 1, 2, 3, 6, and 12 hours from high-risk zones identified in Objective 1.
Note: Output format should be a raster file with 30m pixel/grid resolution.

Expected Outcomes:
a) Fire prediction map for the next day.
b) Simulated fire spread with animation for 1/2/3/6/12 hours.

Dataset Required:
a) Weather Data: Wind speed/direction, temperature, rainfall, humidity (from MOSDAC, ERA-5, IMD)
b) Terrain Parameters: Slope and aspect (from 30m DEM available on Bhoonidhi portal)
c) Thematic Data: Fuel Availability using LULC datasets

Suggested Tools/Technologies:
Python, Scikit-learn, ML techniques such as U-NET or LSTM for prediction, and Cellular Automata or other ML models for fire spread simulation.

Expected Solution / Steps to be followed to achieve the objectives:
Use LULC maps (from Bhuvan/Sentinel Hub) for an area like Uttarakhand.
Collect historical weather raster data (from IMD or ERA-5).
Derive slope and aspect from DEM via Bhoonidhi Portal.
Use GHSL for human settlement & stressor layers (e.g., roads).
Resample all datasets to 30m resolution to form the feature stack.
Use historical fire data (e.g., VIIRS) as the target variable.
Train a U-NET or LSTM to predict fire probabilities (classes: high, moderate, low, nil).
Simulate fire spread using Cellular Automata based on wind, slope, and fuel data.

Evaluation Parameters:
Accuracy of prediction maps and fidelity of the spread simulation models will be the key evaluation metrics.`,
  },
  {
    title: "AI-based Help bot for information retrieval out of a knowledge graph created based on static/dynamic content at a web portal.",
    description: `Overview
AI-based Help Bot for Information Retrieval from a Knowledge Graph Based on Static/Dynamic Web Portal Content
The MOSDAC (www.mosdac.gov.in) portal hosts satellite data and services accessible to the public. It includes extensive FAQs, documentation, product specifications, and support material. However, users often struggle to locate precise information due to layered navigation, mixed content formats, and time constraints. An AI-based help bot is envisioned to intelligently parse all hosted content and return instant, contextual responses to user queries, enhancing usability and knowledge accessibility across the platform.

Objective:
Develop an intelligent virtual assistant leveraging NLP/ML for query understanding and precise information retrieval.
Extract and model structured/unstructured content into a dynamic knowledge graph.
Support geospatial data intelligence for spatially-aware question answering.
Ensure contextual, relationship-based information discovery.
Ensure modularity for deployment across other web portals with similar architectures.
Expected Outcomes:
An AI-powered conversational help bot capable of resolving user queries accurately from the MOSDAC portal.
Knowledge graph architecture for entity/relationship mapping across the portal.
Dataset Required:
Static and dynamic web content including:
Product catalogues, FAQ sections, documentation (PDF, DOCX, XLSX, etc.)
Meta tags, tables, web pages, and accessibility tags (ARIA-labels)
Satellite mission details, product types, and scientific articles
Suggested Tools/Technologies:
Python, NVIDIA RAG, LLMs, spaCy, NLTK
Dialogflow, Rasa, LangChain, Node.js
Expected Solution / Steps to be followed to achieve the objectives:
Data Ingestion: Crawl and extract structured/unstructured content from MOSDAC.
Knowledge Graph Creation: Entity and relationship extraction using NLP techniques.
Model Selection: Choose or fine-tune a model for semantic understanding and conversational context.
Training: Train the model using FAQs, documents, and user intent classification.
UI/UX Layer: Build a front-end chatbot interface using frameworks like React or Streamlit.
Integration: Deploy backend services and integrate LLM or retrieval-augmented generation module for real-time querying.
Modularization: Package with scalable architecture for deployment on alternate domains.
Evaluation Parameters:
Intent Recognition Accuracy: How accurately user queries are interpreted.
Entity Recognition Accuracy: Precision of keyword/topic extraction.
Response Completeness: Coverage of answer relative to query context.
Response Consistency: Logical consistency across multi-turn conversations.`,
  },
  {
    title: "Monitoring Air Pollution from Space using Satellite Observations, Ground-Based Measurements, Reanalysis Data, and AI/ML Techniques",
    description: `Overview
Monitoring Air Pollution from Space using Satellite Observations, Ground-Based Measurements, Reanalysis Data, and AI/ML Techniques
Air pollution is a major environmental concern in many urban centers. Regular, consistent monitoring of air pollutant concentrations remains a challenge. Satellite remote sensing enables observations over broad spatial areas, allowing indirect estimation of pollutant levels. This problem statement focuses on estimating surface-level particulate matter (PM) concentrations by leveraging satellite-derived data and AI/ML-based predictive modeling approaches.

Objective:
Estimate surface-level Particulate Matter (PM) concentration using Aerosol Optical Depth (AOD) measurements obtained from INSAT-3D/3DR/3DS satellite observations.
Expected Outcomes:
High-resolution spatial map depicting PM concentration across India, derived from AI/ML-based estimation pipelines.
Dataset Required:
AOD Data: INSAT-3D, INSAT-3DR, INSAT-3DS satellite observations.
Ground-Based PM Data: Central Pollution Control Board (CPCB) station-level data.
Atmospheric Reanalysis Data: Meteorological variables from sources like MERRA-2.
Suggested Tools/Technologies:
Programming tools such as Python or Matlab for data pre-processing and integration. AI/ML methods such as Random Forest for regression modeling and prediction.

Expected Solution / Steps to be followed to achieve the objectives:
Generate AOD spatial maps from INSAT satellite datasets.
Build surface-level PM concentration data using ground-based sources like CPCB.
Integrate atmospheric variables from reanalysis datasets (e.g., MERRA-2).
Train an ML model (e.g., Random Forest) using the combined satellite, ground, and reanalysis data.
Predict surface PM levels from AOD using the trained model.
Validate the predictions with ground truth from CPCB measurements.
Evaluation Parameters:
Accuracy of the estimated PM values must be assessed by comparing them with trusted ground-based measurements from CPCB stations.

`,
  },
  {
    title: "Designing a chain of thought based LLM system for solving complex spatial analysis tasks through intelligent geoprocessing orchestration.",
    description: `Overview
Designing a Chain-of-Thought-Based LLM System for Solving Complex Spatial Analysis Tasks Through Intelligent Geoprocessing Orchestration
Geospatial challenges such as flood risk assessment, site suitability analysis, or land cover monitoring often demand sophisticated workflows involving various GIS tools and data sources. Traditionally, constructing these workflows requires expert knowledge and manual processes. This challenge invites participants to build a system that uses reasoning capabilities of Large Language Models (LLMs) to automatically plan and execute geospatial workflows—step-by-step—much like a human expert.

Objective:
Develop a reasoning-enabled framework combining LLMs and geoprocessing APIs to auto-generate multi-step geospatial workflows from natural language queries.
Enable integration of heterogeneous spatial datasets and libraries for tool/resource selection.
Build an interface translating user queries into sequential geoprocessing tasks with transparent Chain-of-Thought reasoning.
Demonstrate with benchmark tasks like flood mapping and site selection including input/output, metrics, and visualizations.
Expected Outcomes:
Web/desktop application that generates runnable GIS workflows from natural language queries.
Outputs include: JSON/YAML workflow definition, Chain-of-Thought reasoning logs, and GIS outputs.
Demonstrations for tasks like flood-risk mapping and site suitability analysis.
Comparative metrics for accuracy, runtime, resource use, and error management versus baseline/manual methods.
Dataset Required:
Open data from Bhoonidhi, OpenStreetMap (OSM), and other public geospatial sources.
Suggested Tools/Technologies:
Open-source geoprocessing tools like QGIS, GRASS GIS, or GDAL.
LLMs such as Mistral-7B-Instruct, LLaMA-3-8B, or Phi-2 integrated using frameworks like LangChain or Transformers.
Expected Solution / Steps to be followed to achieve the objectives:
Select efficient pre-trained LLMs like Mistral or LLaMA-3 compatible with mid-tier GPUs.
Implement Retrieval-Augmented Generation (RAG) using documentation from QGIS/GRASS/GDAL.
Create a prompt library for Chain-of-Thought reasoning and in-context learning.
Define common GIS functions in JSON schema; enable model to select operations and parameters.
Use tools like GeoPandas, Rasterio, WhiteboxTools, or headless PyQGIS to execute workflows.
Incorporate a reasoning-acting-observation loop to improve task outcomes iteratively.
Develop a Streamlit-based UI for input, output visualization, Chain-of-Thought tracking, and layer downloads.
Continuously enrich the RAG DB and prompt sets with validated successful workflows.
Evaluation Parameters:
Evaluate logical and syntactic validity of generated workflow steps.
Assess clarity and traceability of Chain-of-Thought reasoning explanations.
Measure robustness against errors like CRS mismatches and geometry issues.
Benchmark efficiency and usability across a wide range of spatial queries.`,
  },
  {
    title: "Chase the Cloud: Leveraging Diffusion Models for Cloud Motion Prediction using INSAT-3DR/3DS Imagery.",
    description: `Overview
Chase the Cloud: Leveraging Diffusion Models for Cloud Motion Prediction using INSAT-3DR/3DS Imagery
This project focuses on predicting cloud motion using diffusion models, a class of deep generative networks, applied to satellite imagery from INSAT-3DR/3DS. Traditional optical flow or physics-based models often falter when confronted with volatile weather dynamics. In contrast, this approach uses spatio-temporal learning to simulate realistic cloud evolution from multi-spectral past frames, delivering enhanced forecasting for short-term (0–3 hours) applications including nowcasting and early warnings for severe weather events.

Objective:
Develop a deep generative model based on diffusion networks for short-term (0–3 hrs) cloud motion forecasting using INSAT imagery.
Utilize multi-channel input (VIS/IR/WV) for spatio-temporal modeling.
Deliver a prototype for improved nowcasting, especially for severe weather like thunderstorms.
Demonstrate viability of indigenous satellite data for frontier AI research in meteorology.
Expected Outcomes:
A trained diffusion model generating 1–2 future cloud frames based on past sequences.
Visual and quantitative comparison of predicted vs actual cloud motion.
Accuracy evaluation using SSIM, PSNR, MAE, etc.
Prototype interface for prediction and visualization.
Research insights into using generative models for EO-based weather forecasting.
Dataset Required:
INSAT-3DR / 3DS Level-1C Data for the Indian subcontinent.
Channels: Visible (VIS), SWIR, TIR1/TIR2 (IR), WV (Water Vapor).
Temporal resolution: 30 mins | Spatial resolution: ~4 km.
Suggested Tools/Technologies:
Deep Learning: PyTorch, TensorFlow, PyTorch Lightning
Architectures: Conditional Diffusion Models (DDPM, LDM), UNet backbones
Geospatial: GDAL, xarray, NumPy, OpenCV
Visualization: matplotlib, Plotly
Expected Solution / Steps to be followed to achieve the objectives:
Data Preprocessing: Align INSAT imagery (georeferencing, reprojection, normalization); arrange sequences (past 4–6 frames ➝ next 1–2 prediction).
Model Design: Implement conditional diffusion model using spatio-temporal sequences and channel context.
Training: Train using reconstruction losses (MAE/MSE), perceptual loss (SSIM), optionally adversarial loss.
Inference: Generate future satellite cloud frames from previous inputs.
Evaluation: Use SSIM, MAE, PSNR for accuracy and perform visual inspections of prediction variance.
Prototype Development: Build a GUI-based web app for input data ingestion and comparison of predicted vs ground-truth cloud movement.
Evaluation Parameters:
Prediction Accuracy: SSIM, MAE, PSNR
Innovation: Application of diffusion models on geospatial datasets; use of indigenous INSAT data
Prototype Quality: Usability, responsiveness, cloud animation visualization
Scalability: Adaptability for integration with operational nowcasting systems (e.g., IMD, NESAC)`,
  },
  {
    title: "AI/ML-driven automated feature detection and change analysis of glacial lakes, road networks, and urban drainage systems from multi-source satellite imagery.",
    description: `Overview
AI/ML-Driven Automated Feature Detection and Change Analysis of Glacial Lakes, Road Networks, and Urban Drainage Systems from Multi-source Satellite Imagery
This challenge aims to automate the detection, delineation, and spatiotemporal analysis of critical geospatial features—specifically glacial lakes, national highway centrelines, and urban drainage networks—by leveraging AI/ML/DL techniques. By integrating optical, SAR, and elevation data, participants are expected to build robust, scalable pipelines capable of generalizing across diverse landscapes and temporal variations. The resulting outputs will support infrastructure planning, environmental monitoring, and disaster risk reduction initiatives.

Objective:
Develop AI/ML/DL models to automatically extract:
Glacial lakes and analyze their temporal evolution using optical and SAR imagery.
National highway centrelines from high-resolution satellite images.
Urban drainage networks using DEMs and satellite inputs.
Ensure model robustness against terrain variability, occlusions, and seasonal effects.
Deliver geospatially aligned, generalizable outputs for downstream decision-support applications.
Expected Outcomes:
Accurate polygon shapefiles of glacial lakes and their temporal change maps.
Line vector layers (shapefile/GeoJSON) of road centrelines with minimal breaks.
Connected stream/drainage networks linking urban waterbodies.
A modular pipeline/toolkit for multi-feature extraction.
Performance dashboards showcasing scalability, accuracy, and robustness.
Dataset Required:
Satellite Imagery: Resourcesat-2/2A (AWiFS, LISS-III), LISS-IV, Sentinel-1/2, Landsat Series
DEM: CartoDEM, SRTM, ASTER
Reference Data: Glacial Lake Inventories (NRSC-GL, GLIMS, Hi-MAG, ICIMOD), Bhuvan Maps, OSM layers, waterbody shapefiles
Suggested Tools/Technologies:
Programming & ML: Python, TensorFlow, PyTorch, Scikit-learn
Geospatial: GDAL, Rasterio, GeoPandas, QGIS
Model Architectures: U-Net, DeepLabV3+, Random Forest, SVM, SAM (Segment Anything Model)
Visualization: Google Earth Engine, Streamlit, Dash
Expected Solution / Steps to be followed to achieve the objectives:
Data Preparation: Harmonize spatial resolution, apply cloud/shadow masking, co-register datasets.
Model Training: Use segmentation/classification models tailored per feature type.
Feature Extraction:
Glacial Lakes: Segment and track changes temporally.
Roads: Use segmentation + skeletonization/post-processing for centerline extraction.
Urban Drainage: Apply DEM and ML models to derive stream paths.
Validation: Benchmark against reference datasets and compute spatial accuracy.
Output Generation: Export features as shapefile/GeoJSON; visualize overlays.
Deployment: Package modular pipeline for reuse across regions and seasons.
Evaluation Parameters:
Accuracy: Pixel/polygon-wise agreement with reference datasets.
Completeness & Robustness: Ability to detect features under challenging conditions (snow, shadow, clutter).
Geospatial Alignment: Use buffer overlap metrics to compare roads/streams with existing networks.
Temporal Consistency: Stable feature detection across time-series imagery.
Scalability: Model generalization to larger areas with minimal fine-tuning.
Computational Efficiency: Evaluate runtime, memory usage, and deployment readiness.`,
  },
   {
    title: "Developing an Algorithm for Air Quality Visualizer and Forecast App to generate granular, real-time, and predictive air quality information, especially in smaller cities or rural areas.",
    description: `Overview
Developing an Algorithm for Air Quality Visualizer and Forecast App to Generate Granular, Real-time, and Predictive Air Quality Information
An intuitive air quality visualizer and forecasting tool designed to bridge the data gap for underserved regions. While most AQI (Air Quality Index) apps focus on large metropolitan areas, this idea aims to develop an application that delivers hyperlocal, real-time, and predictive air quality insights—even in small towns and rural areas.

Objective:
Display real-time AQI from both ground stations and satellite sources.
Visualize historical AQI trends with location filters.
Integrate meteorological data to forecast air quality 24–72 hours ahead.
Provide health recommendations based on pollution levels.
(Optional) Map pollution sources (e.g., traffic, factories, crop burning).
Expected Outcomes:
Real-Time, Location-Based AQI Updates.
Personalized Health Alerts & Recommendations.
Predictive AQI Forecasting.
Interactive AQI HeatMaps.
Push Alerts for certain threshold.
Dataset Required:
AQI Dataset from IMD/CPCB/ISRO.
Suggested Tools/Technologies:
UI and Frameworks: Flutter, React
Backend Architecture: Supabase DB, Firebase Notifications, Node.js + Express, Python
API and Data: Bhuvan Maps / Google Maps API, Satellite/CPCB data for AQI
Forecasting: TensorFlowLite, Hugging Face predictive models API
Testing: Jest
Analytics: Firebase Analytics, Google Analytics
Expected Solution / Steps to be followed to achieve the objectives:
AQI Map: Select a city or pin your location. Pull latest AQI from CPCB and visualize satellite-derived pollution. Use color-coded zones (Green = Good, Red = Hazardous).
Historical Trends: Graph AQI/PM2.5/NO₂ over weeks or months. Show satellite images over time for visual correlation.
Forecasting (Optional): Use weather + historical AQI to train a model to predict next 3 days’ pollution level. Show forecast as line chart or animated map.
Health & Advisory Dashboard: Display actionable suggestions: 'Wear a mask', 'Avoid jogging', 'Use air purifier'. Use AQI breakpoints from WHO or Indian standards.
Advanced Ideas for Bonus Points:
Add push notifications for pollution spikes.
Show pollution source heatmaps using vehicle density and industrial zones.
Offer API for developers or cities to integrate into other systems.
Link to emergency response tools for high AQI alerts in schools or hospitals.`,
  },
   {
    title: "Novel Approaches for Optimizing Deep Learning in Earth Observation with Imbalanced Data.",
    description: `Overview
Novel Approaches for Optimizing Deep Learning in Earth Observation with Imbalanced Data
In many remote-sensing segmentation tasks, weaker classes (e.g., small water bodies, wetlands, deforested patches) are vastly underrepresented compared to dominant classes (e.g., vegetation, urban). Standard cross-entropy with SGD/Adam drives the network toward majority labels, yielding poor recall on rare targets. In this hackathon, participants will devise mathematically motivated optimizers, loss functions, or network modifications that explicitly address class imbalance in satellite imagery segmentation. The goal is to maximize weaker‐class detection (e.g., IoU/F1) while preserving overall accuracy.

Objective:
Develop techniques to improve segmentation of weaker classes in remote sensing imagery.
Design novel optimizers, loss functions, or model architectures that counter class imbalance.
Enhance weaker-class recall (e.g., for wetlands, water bodies) without significantly degrading overall performance.
Expected Outcomes:
A deep learning model that significantly improves detection of rare classes in satellite imagery.
New or modified loss functions, optimizers, or training strategies tailored for imbalanced data.
Empirical results showing improved IoU/F1 for weaker classes on benchmark datasets.
Dataset Required:
LISS-IV imagery: High-resolution (5.8m) multispectral satellite images. Source: Bhoonidhi, NRSC, ISRO
Corresponding land cover labels.
Suggested Tools/Technologies:
Python, PyTorch or TensorFlow/Keras
Libraries: Albumentations, Rasterio, GDAL, Scikit-learn
Visualization tools: QGIS, Matplotlib, TensorBoard
Expected Solution / Steps to be followed to achieve the objectives:
Analyze class distributions in the dataset and identify imbalance severity.
Experiment with modified loss functions (e.g., focal loss, dice loss, Lovasz loss, class-balanced loss).
Propose new optimization strategies or network designs targeting rare class enhancement.
Implement data-level techniques (augmentation, sampling, synthetic data).
Train and validate models using balanced and imbalanced metrics.
Compare with baseline performance and perform ablation studies.
Evaluation Parameters:
Weaker-class performance: IoU, Recall, and F1 Score for underrepresented classes
Overall model accuracy and macro-averaged IoU
Class-wise confusion matrix analysis
Robustness and generalization across different scenes or sensors
Innovation and mathematical soundness of proposed techniques`,
  },
   {
    title: "Developing an AI/ML-based algorithm for identifying tropical cloud clusters using half-hourly satellite data from the INSAT.",
    description: `Overview
Developing an AI/ML-based Algorithm for Identifying Tropical Cloud Clusters Using Half-Hourly Satellite Data from the INSAT
Tropical Cloud Cluster (TCC) is a key element of the weather and climate by transporting mass, momentum and heat vertically into the Earth’s atmosphere. Identifying the TCC is paramount important to the identification of cyclogenesis and its evolution is of great significance in weather and climate system. To study the initiation and development of TCCs over the Indian Oceanic region, a dataset called “Indian Tropical Cloud Cluster (ITCC)” to be generated using INSAT-3D Infrared Brightness Temperature (IRBRT) data. In order to generate the ITCC data, an automatic algorithm to be developed based on deep learning/machine learning. Thus, the current proposal describes methodology for identifying the TCCs using INSAT-3D IRBRT data. Identified TCCs will be tracked as they move around their Indian Ocean basin and variables such as TCC size, location, convective intensity, cloud-top height. The algorithm can be adapted to near-real-time tracking of TCCs, which could be of great benefit to the tropical cyclone forecast community.

Objective:
To develop an AI/ML based algorithm for identifying cloud clusters using half-hourly satellite data from the INSAT series.
The algorithm should be capable of detecting cloud characteristics by applying an IRBRT threshold over the Indian Ocean basins.
Additionally, the algorithm should be able to determine the size, intensity, and independence of the cloud clusters.
Expected Outcomes:
Convective latitude, longitude (Center coordinates of coldest convection)
Pixel count (Number of pixels in the TCC with Tb , threshold)
Mean Tb (Average temperature of all TCC pixels)
Minimum Tb (Temperature of the coldest TCC pixel)
Median Tb (Median temperature of all TCC pixels)
Std dev Tb (Standard deviation of Tb for all TCC pixels)
Maximum radius (Largest distance around azimuth from center to edge)
Minimum radius (Smallest distance around azimuth from center to edge)
Mean radius (Average distance around azimuth from center to edge)
Maximum cloud-top height (Tallest cloud-top height in the TCC)
Mean cloud-top height (Average cloud-top height in the TCC)
Dataset Required:
INSAT-3D Infrared Brightness Temperature (IRBRT) data
Suggested Tools/Technologies:
Machine Learning frameworks (e.g., TensorFlow, PyTorch)
Expected Solution / Steps to be followed to achieve the objectives:
Size and Intensity: TCC candidates are first identified by their IR Brightness Temperature (IRBT) and size. A 3-hourly INSAT-3D scene is filtered such that only pixels meeting a pre-determined IRBT threshold pass through. And estimated TCC radius must be at least 1° (~111 km) in one direction to be considered large enough to be a TCC. Furthermore, below-threshold cloud pixels must make up an area of at least 34,800 km2 (~90% of the area of a 1° radius circle) to filter out non-circular convective structures.
Independence: TCCs can be complex systems with multiple and distinct areas of intense convection. It is common to find several TCC candidates within close proximity to one another. In these situations, the algorithm should consider all of the convective maxima subsets of the largest (“parent”) cluster, as long as they are within 1200 km of the parent. If a candidate is more than 1200 km away, then it is considered a distinct TCC.
Track: Once it is determined that a candidate passes all of the required criteria to be considered a TCC, the algorithm searches back in time to determine if the TCC existed previously. The geometric center of a TCC must be within a specified distance of its last recorded position in order to be identified as the same TCC. The search radii for each time interval since the previous fix are given in Table 1.

Hours since previous location	Search Radius (km)
3	450
6	550
9	600
12	650
Evaluation Parameters:
Accuracy: Precision of the retrieved data in meeting the context of the queries.
Relevance: Degree to which the retrieved data is relevant to the implicit information in the queries.
User Experience: Ease of use and satisfaction in querying and retrieving data through the system.`,
  },
   {
    title: "Identifying halo CME events based on particle data from SWIS-ASPEX payload onboard Aditya-L1",
    description: `Overview
Identifying Halo CME Events Based on Particle Data from SWIS-ASPEX Payload onboard Aditya-L1
Our Sun drives the particle flux in the interplanetary medium and also affects our near earth environment. A sudden change in these particle flux can result in significant disturbance in the upper atmosphere and can result in major loss to the space assets. An early warning system based on particle measurement carried out at location much farther away, before these particles reach earth, can help us to take precautionary measures to prevent any catastrophic destruction.

Objective:
To use the data from Solar Wind Ion Spectrometer (SWIS) instrument of ASPEX payload onboard Aditya-L1 mission to identify transient events such as halo Coronal Mass Ejection (CME) from the Sun.
To analyze SWIS Level-2 data (particle flux, number density, temperature, velocity) to characterize CME signatures.
To develop methods to process time-series of SWIS parameters and derive suitable thresholds for detecting halo CME events.
Expected Outcomes:
Identification of threshold(s) or derived parameter(s) from SWIS data time-series that are indicative of halo CME events.
Improved understanding of transient solar wind signatures at L1 location.
Dataset Required:
SWIS Level-2 data (flux, number density, temperature, speed) from Aug 2024 onward, available at ISSDC.
Halo CME event timestamps and properties from CACTUS CME database.
Suggested Tools/Technologies:
Programming Languages: Python or C
Libraries: CDF libraries (from NASA SPDF)
Visualization: Matplotlib, Plotly
Signal Processing: Pandas, SciPy, NumPy
Expected Solution / Steps to be followed to achieve the objectives:
Identify halo CME timestamps using CACTUS CME database.
Extract corresponding SWIS Level-2 data for identified CME windows.
Analyze flux, density, temperature, and speed parameters during these windows.
Derive new time-series features (e.g., moving averages, gradients, combined metrics).
Determine statistical thresholds on derived parameters that signal CME presence.
Validate thresholds against confirmed CME occurrences for accuracy and robustness.
Evaluation Parameters:
Correct identification of key signature patterns corresponding to CME events.
Effectiveness of derived parameters and thresholds in distinguishing transient events.
Accuracy and reliability of detection methodology using time-series data.`,
  },
   {
    title: "Novel method to detect landslides & boulders on the Moon: Using Chandrayaan images",
    description: `Overview
Novel method to detect landslides & boulders on the Moon: Using Chandrayaan images
Landslides are mass movement rocks, debris of material downwards along the slope under the influence of gravity triggered by multiple geological activities. On Moon, there are plenty of surface with steep slope which are vulnerable to landslides and boulder falls. The identification of landslides and boulder fall are crucial because they indicate information about the recent activities undergone. Through this project, develop a novel algorithm using the Chandrayaan 1, 2 images to detect the landslide and boulder falls. The landslide occurs in wide range of size and extent and their pattern of occurrence is unpredictable. The Chandrayaan images provides a wide range (latitude, longitude) of coverage and using those images, the landslide and boulder fall presence need to be detected. The problem statement mentions a “Novel” algorithm, to detect the landslides means: the algorithm should show some novelty in landslide detection from the conventional or previous existing landslide detection techniques. The algorithm should also detect individual boulders in the given image and provide statistics like diameter or length and other statistics. After detection, the algorithm should be capable to decode the source for the landslide and provide vital information about it. The most challenging task is to look for signature and pattern in landslide and boulder fall and use it to highlight the most active region. Overall, the algorithm should provide new information about the landslide & boulder fall once it is detected.

Objective:
Identify the landslides and boulders from given Chandrayaan images.
Describe the novelty in landslides identification from other conventional methods.
Describe the novelty in detecting individual boulders from images.
Primarily the algorithm should work on any regions on the Moon.
Expected Outcomes:
An annotated map/image with clear marks of landslides, boulders.
Details about individual landslides – their geometry, their temporal occurrence.
Details about each boulder – their length, diameter.
Novelty in landslide detection from other conventional methods.
Novelty in detecting boulders and classifying them.
A detailed explanation for the detection of landslides and boulder falls over the given region.
Dataset Required:
Chandrayaan-1/2 – Terrain Mapping Camera (TMC)
Chandrayaan-2 – Terrain Mapping camera derived Digital Terrain Model (DTM)
Chandrayaan-2 – Optical High Resolution Camera (OHRC)
Suggested Tools/Technologies:
QGIS (open source)
ArcMap
Any other open source/licensed software’s`,
  },
   {
    title: "Dual image super resolution for high-resolution optical satellite imagery and its Blind Evaluation",
    description: `Overview
Dual Image Super Resolution for High-Resolution Optical Satellite Imagery and its Blind Evaluation
Acquiring high-resolution data from satellite platforms is an expensive operation due to resource constraints. Hence, satellites acquire multiple low-resolution images often shifted by half a pixel in both along and across track directions. These low-resolution images are utilized to generate high-resolution images. The quality of high-resolution images often depends on various satellite system parameters including the algorithm used for super-resolving. However, assessing the quality of these generated super-resolved images is challenging due to the absence of ground-truth references. This also necessitates the use of blind (no-reference) quality assessment techniques that can evaluate both the perceptual realism and fidelity of super-resolved images.

Objective:
To generate high-resolution images from two (dual) low-resolution images.
To evaluate the image quality using both predefined metrics and blind visual quality assessment techniques in the absence of ground-truth references.
Expected Outcomes:
Super-resolved image exceeding the resolution of low-resolution inputs.
Quality evaluation metric under blind visual assessment settings.
Dataset Required:
Low-resolution satellite images as input.
High-resolution satellite image for evaluation purpose (if available).
Suggested Tools/Technologies:
Both classical and deep learning-based techniques can be considered.
Expected Solution / Steps to be followed to achieve the objectives:
Classical Techniques:
Estimation and application of degradation functions from low-resolution images.
Registration of images.
Non-uniform interpolation.
Deep Learning Techniques:
Data pipeline setup for training.
Model selection and fine-tuning.
Evaluation on validation data.
Blind Assessment Techniques:
Generate ground-truth (GT) quality score under reduced reference setting from super-resolved images using state-of-the-art metrics.
Methodology selection: handcrafted features ML-based or deep feature-based quality scoring.
Correlation (Rank/Value) of predicted scores with GT scores and sensitivity analysis across quality levels.
Evaluation Parameters:
Full-reference metrics: MSE, RMSE, SSIM, PSNR (where applicable).
Correlation of blind assessment results with full-reference metrics.
Robustness of blind metrics under different levels of image quality.

`,
  },
   {
    title: "Generation of High-resolution Lunar Digital Elevation Model from Lunar Images using Photoclinometry (Shape from Shading).",
    description: `Overview
Generation of High-resolution Lunar Digital Elevation Model from Lunar Images using Photoclinometry (Shape from Shading)
Photoclinometry (also known as Shape-from-Shading, or SPC) is a technique used to extract topographic information from images acquired by spacecraft. 3D reconstruction of planetary surfaces using mono images, with appropriate illumination and viewing direction metadata, is essential for generating high-resolution DEMs, particularly where stereo imagery is unavailable. This technique not only enables DEM generation but also improves the accuracy of existing elevation datasets.

Objective:
To generate a disparity (skin depth) map using mono images of the lunar surface.
To convert disparity maps into an absolute Digital Elevation Model (DEM).
Expected Outcomes:
High-resolution Digital Elevation Model (DEM) derived from mono lunar imagery.
Dataset Required:
Lunar images from Chandrayaan missions (TMC, TMC-2, IIRS, OHRC).
Images from NASA missions (LRO NAC/WAC, M3).
Data from JAXA mission (Selene).
Suggested Tools/Technologies:
QGIS
Computer Vision Libraries and Techniques
Expected Solution / Steps to be followed to achieve the objectives:
Input: Mono or multi-temporal lunar images with solar illumination and viewing geometry metadata.
Steps:
Pixel-Level Disparity Map Generation
Sub-Pixel Refinement of Disparity
Transformation into a Topographic Map (DEM)
Software implementation of the above workflow with visualization capabilities.
Evaluation Parameters:
Comparison of the generated DEM height range with reference DEMs derived from stereo-photogrammetry or laser altimetry.
Accuracy in representing local terrain features and elevation gradients.`,
  },
   {
    title: "Robust Change Detection, Monitoring, and Alert System on user-defined AOI using Multi-Temporal LISS-4 Satellite Imagery.",
    description: `Overview
Robust Change Detection, Monitoring, and Alert System on User-Defined AOI Using Multi-Temporal Satellite Imagery
Change detection using satellite imagery plays a critical role in monitoring anthropogenic and environmental changes. Despite its potential, operational implementation faces bottlenecks such as cloud occlusions, atmospheric noise, and the difficulty in separating natural vs. human-induced changes.Imagery (~5m resolution with Red, Green, and NIR bands) from Bhoonidhi serves as an ideal input for high-frequency change analytics. The objective is to build a robust, scalable platform capable of proactive monitoring and alerting for user-defined Areas of Interest (AOIs), filtering out irrelevant seasonal or natural fluctuations.

Objective:
Develop a robust and automated change detection and alert system using multi-temporal imagery.
Enable cloud/shadow masking and anthropogenic change isolation.
Empower users with self-defined AOI tools and notification capabilities.
Support GIS-compatible output generation for downstream spatial analysis.
Expected Outcomes:
Automated pipeline for change detection with robust cloud and shadow masking.
Web-based platform for AOI selection, visualization, and time-series analysis.
Email or dashboard alerts for significant anthropogenic changes in user-defined AOIs.
GIS-compatible outputs including shapefiles and GeoJSON.
Dataset Required:
Multi-temporal satellite imagery from Bhoonidhi (https://bhoonidhi.nrsc.gov.in).
Suggested Tools/Technologies:
WebGIS Frameworks: Vue.js, Bootstrap, HTML/CSS/JS, OpenLayers, GeoServer
Spatial Databases: PostgreSQL with PostGIS
Backend and Processing: Python, Node.js
Expected Solution / Steps to be followed to achieve the objectives:
Preprocessing: Implement cloud and shadow detection and masking using threshold-based or AI-enhanced models.
Change Detection: Utilize multi-temporal spectral analysis limited to Red, Green, and NIR bands to differentiate anthropogenic from seasonal changes.
AOI Selection: Web UI for user-driven AOI definition and storage.
Alert System: Backend services to monitor AOI changes and trigger alert notifications (email/web).
Data Management: Efficient storage and retrieval using spatial databases and tiled architecture.
Output Delivery: Export change maps in shapefile, GeoTIFF, and GeoJSON formats.
Evaluation Parameters:
Functionality: End-to-end automation including AOI selection, preprocessing, detection, alerting, and output.
Usability: UI/UX for users with minimal technical background.
Reliability: Accuracy of change detection, minimization of false positives due to seasonal or natural phenomena.`,
  },
  // Add more descriptions here matching their index
];

export default function ChallengeDetail() {
  const { id } = useParams();
  const challenge = challengeData[parseInt(id)];

  if (!challenge) {
    return <div className="p-6 text-white text-center">Challenge not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">{challenge.title}</h1>
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
        {challenge.description}
      </p>
    </div>
  );
}