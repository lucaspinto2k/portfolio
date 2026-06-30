import json
import re

text = """
## 1. Photo Tint Modifier

**The Concept:** 
A desktop utility designed to restore and batch-process legacy scanned photographs automatically. The user experience needed to be effortless: point the app at a folder, and watch it seamlessly identify and correct color degradation (specifically red and yellow tint hues) and fix incorrect orientations without risking image data loss.

**The Logic & Workflow:** 
I prompted the AI to handle the backend computer vision architecture first, utilizing OpenCV and Pillow (PIL) for image analysis. The workflow was broken down into asynchronous worker threads to prevent the UI from blocking while scanning massive directories. I orchestrated a step-by-step logic pipeline: detect extreme red/yellow color hues, detect rotation anomalies via EXIF, and then wrap this processing core in a sleek, dark-themed PyQt6 interface that visually labels problematic files before applying batch fixes.

**The Logic Triumphs:** 
The biggest roadblock was balancing the detection thresholds so that naturally warm-toned photos (like sunsets or sepia aesthetics) weren't falsely flagged as having red or yellow degradation. I stepped in and used my problem-solving logic to steer the AI away from basic color averaging, instead implementing targeted HSV range masks in OpenCV to strictly isolate unnatural scanner tints.

**The Tech Stack:** 
- **Backend:** Python, OpenCV (cv2), Pillow (PIL)
- **Frontend:** PyQt6 (GUI toolkit)
- **Platforms:** Windows / PC Desktop

**The Result:** 
*[Insert Video/GIF here: A short recording showing the app rapidly scanning a large folder, flagging tinted photos in red/yellow, and automatically batch-fixing their color profiles.]*

---

## 2. Smart File Organizer

**The Concept:** 
An automated backend engine designed to sift through thousands of disorganized files and photos, structuring them into a clean, chronological directory tree. The goal was to take the manual labor out of file management by relying on embedded file metadata.

**The Logic & Workflow:** 
I needed the file organizer to parse EXIF data first, then dynamically create directory trees based on the extracted Year/Month chronological data. I prompted the AI to build the core file-traversal loop using Python's OS and Shutil libraries, and then integrated Pillow's EXIF modules to read the origin dates of media files securely before triggering the move operations.

**The Logic Triumphs:** 
The biggest roadblock the AI hit was that many legacy files, screenshots, or downloaded images were entirely missing date metadata or had corrupted EXIF headers, which would cause the script to crash mid-operation. I used my logic to steer it out of this dead end by prompting the AI to write robust `try/except` exception handlers for missing metadata, creating a fallback logic tree that routed those files into an "Uncategorized" folder based on their OS-level creation date.

**The Tech Stack:** 
- **Backend:** Python, Pillow (PIL), OS/Shutil
- **Platforms:** CLI / Cross-Platform

**The Result:** 
*[Insert Video/GIF here: A screen recording showing a chaotic folder being instantly sorted into beautifully nested Year and Month directories via a terminal command.]*

---

## 3. The Dread Machine (TheDreadEngine)

**The Concept:** 
A highly experimental, atmospheric VST3/Standalone audio plugin designed for dark soundscapes and horror sound design. The plugin empowers sound designers with unconventional parameters like "Shepherd Speed", "Tape Degradation", "Formant Agony", and "Abyss Depth" to twist audio into terrifying, cinematic textures.

**The Logic & Workflow:** 
I utilized the JUCE framework in C++ to build a high-performance audio engine. I prompted the AI to set up the DSP logic for unconventional audio processing: Tape Wow, Formant Shifting, and Shepherd Tones. Because the interface required a raw, industrial feel, I integrated custom fonts (`SpecialElite.ttf`) and dark, gritty UI assets directly into the binary data pipeline via CMake.

**The Logic Triumphs:** 
The AI initially struggled with real-time audio thread safety when modulating complex pitch and time-stretching buffers (like the "Ghost Mix" or "Void Size"), leading to severe audio dropouts and CPU spikes. I guided the AI to decouple the UI thread from the DSP process block, utilizing optimized State-Variable Filters (`juce::dsp::StateVariableTPTFilterType`) and lock-free parameter smoothing to keep the CPU overhead extremely low while maintaining high-fidelity sonic destruction.

**The Tech Stack:** 
- **Languages:** C++, CMake
- **Framework:** JUCE Audio Framework
- **Platforms:** Windows (VST3 & Standalone Plugin)

**The Result:** 
*[Insert Video/GIF here: A short video showing a simple drum loop being mangled into a terrifying soundscape by automating the "Formant Agony" and "Void Size" parameters.]*

---

## 4. Lux Nu Gen (Lux VST)

**The Concept:** 
A lush, multi-effects guitar VST3 plugin aimed at modern, ambient, and shoegaze guitarists. Instead of a sterile digital interface, it acts as an all-in-one boutique pedalboard, featuring custom DSP modules like "Crystal Pitch Delay", "Lush Shimmer Reverb", "Swervedriver Chorus", and a "Modern Amp Head".

**The Logic & Workflow:** 
Also built using JUCE and C++, I prompted the AI to structure the DSP chain modularly (`DSP_Modules.h`). This object-oriented approach ensured that each effect—from the Analog Phaser to the SciFi Bounce—operated independently in memory before hitting the master amp head simulation, making it easy to toggle and route signals without introducing phase issues.

**The Logic Triumphs:** 
Developing the "Lush Shimmer Reverb" involved complex recursive pitch-shifting within a reverb feedback loop. The AI struggled to implement this without causing runaway feedback spikes (digital screeching) when the mix was pushed high. I stepped in to implement strict DSP clipping and gain staging inside the feedback matrix, ensuring the shimmer effect bloomed and decayed musically instead of blowing out the audio engine.

**The Tech Stack:** 
- **Languages:** C++, CMake
- **Framework:** JUCE Audio Framework
- **Platforms:** Windows (VST3 & Standalone Plugin)

**The Result:** 
*[Insert Video/GIF here: A quick screen recording playing a clean guitar DI through the plugin, showing the lush UI and hearing the shimmer reverb and crystal delay open up the stereo field.]*

---

## 5. LPTV & LPRadio (Broadcast TV & Radio Ecosystem)

**The Concept:** 
A dynamic, immersive web ecosystem designed to simulate a live Heavy Metal & Rock TV broadcast and radio station. The goal was to create a deeply atmospheric, "futuristic HUD" aesthetic (think Cyberpunk meets MTV), giving the user a persistent, uninterrupted streaming experience complete with visualizers, live tickers, and playlist databases.

**The Logic & Workflow:** 
I approached this by defining the visual interface and grid constraints first, as the aesthetic *was* the core feature. I directed the AI to build a CSS Grid overlay over a borderless YouTube iframe to hide default playback controls and create a custom "TV frame." Once the frontend structure and neon color tokens (magenta, cyan, green) were in place, I prompted the AI to construct the backend logic: an interconnected `playlist_db.js` system that seamlessly transitions content to mimic live broadcasting.

**The Logic Triumphs:** 
The AI struggled with maintaining a seamless visual experience when transitioning between video embeds, often exposing black bars or default YouTube UI elements that broke the immersion. I intervened by steering the logic towards a "scale-and-bleed" CSS wrapper (`.iframe-wrapper`) that forcefully pushed default UI boundaries out of the visible viewport, tricking the browser into displaying a pristine, unbranded video stream under our custom HUD.

**The Tech Stack:** 
- **Frontend:** Vanilla HTML5, CSS3, JavaScript
- **Typography:** Orbitron, Syne, Inter (Google Fonts)
- **Platforms:** Web, Mobile-Responsive

**The Result:** 
*[Insert Video/GIF here: A short recording showing the sleek dark-mode UI, the pulsing neon ambient glow, and the frequency visualizer bouncing in time with the music.]*

---

## 6. CRT TV Simulator

**The Concept:** 
A nostalgic, interactive web and desktop application that replicates the visual aesthetics and user experience of a vintage CRT television. The goal was to achieve perfect scanlines, RGB separation, and screen curvature while keeping performance high.

**The Logic & Workflow:** 
I instructed the AI to build a custom CSS/WebGL shader pipeline to simulate the CRT distortion accurately. To ensure cross-platform compatibility, I architected the app to use a shared codebase, wrapping the web layer into Tauri for a lightweight desktop executable and Capacitor for mobile.

**The Logic Triumphs:** 
The AI struggled with WebGL shader performance, causing severe lag and battery drain on mobile devices. I intervened by guiding the AI to optimize the scanline rendering loops and dynamically reduce texture resolution on smaller viewports, ensuring a smooth 60FPS CRT effect across all devices without losing the retro fidelity.

**The Tech Stack:** 
- **Frontend/Backend:** HTML/JS/CSS, WebGL, Tauri (Desktop), Capacitor (Mobile)

**The Result:**
*[Insert Video/GIF: App switching on with a satisfying CRT glow and channel static]*

---

## 7. iPod Classic Simulator (LUX iPod Sim)

**The Concept:** 
A functional software replica of the iconic iPod Classic, tapping into modern APIs to play real music while preserving the tactile click-wheel navigation experience.

**The Logic & Workflow:** 
The core challenge was translating a physical click-wheel interaction into a digital, gesture-based UI. I mapped out the state machine for the iPod's menus and instructed the AI to build a circular scroll event listener in React. I then integrated the Spotify API, prompting the agent to handle OAuth flows and token refresh seamlessly in the background. 

**The Logic Triumphs:** 
Translating rotational touch movement into linear list scrolling caused erratic UI jumping. I solved this by steering the logic to calculate the angular delta based on a fixed center point, applying a smoothing threshold to make the digital click-wheel feel exactly as tactile and responsive as the real hardware.

**The Tech Stack:** 
- **Frontend:** React, Vite, Electron, Capacitor
- **API:** Spotify Web API

**The Result:**
*[Insert Video/GIF: User scrolling the digital click-wheel and playing a track via Spotify]*

---

## 8. AI-VA Cassette Simulator

**The Concept:** 
A retro-themed audio player that streams real online radio stations, wrapped in a skeuomorphic cassette tape interface. It was designed to feel tactile and immersive.

**The Logic & Workflow:** 
I needed a robust backend to source live streams. I prompted the AI to build a Python web scraper to fetch and parse USA radio station streams, cleaning the data and exporting it to JSON. For the frontend, I guided the agent to build realistic play/rewind animations using React, ensuring the audio buffer didn't break when simulating tape skipping.

**The Logic Triumphs:** 
The web scraper for live radio streams often hit broken or geo-blocked links, causing the frontend player to crash entirely. I directed the AI to implement an asynchronous pre-flight check that validates stream health in the background before updating the UI, ensuring the cassette never plays dead air.

**The Tech Stack:** 
- **Frontend:** React, Vite, Electron, Capacitor
- **Backend:** Python (Web Scraping/Data parsing)

**The Result:**
*[Insert Video/GIF: Cassette tape loading and playing a live internet radio stream]*

---

## 9. Iconic VST (LUX-ICONIC-VST)

**The Concept:** 
A professional-grade Virtual Studio Technology (VST) audio plugin designed for music producers, offering unique sound manipulation within digital audio workstations (DAWs) like Ableton or FL Studio.

**The Logic & Workflow:** 
Building VSTs requires strict memory management and real-time audio thread safety. I guided the AI to use the JUCE framework in C++, carefully managing the `PluginProcessor` and `PluginEditor` classes, while utilizing Python scripts to automate CMake builds.

**The Logic Triumphs:** 
The AI struggled to bridge the C++ backend with the InnoSetup installer logic, frequently dropping necessary DLL dependencies for Windows distribution. I manually stepped in to structure the CMake post-build steps, ensuring all resources and binaries were packaged perfectly for a seamless end-user installation experience.

**The Tech Stack:** 
- **Languages:** C++, JUCE Framework, CMake
- **Tooling:** Python (Build Automation), InnoSetup

**The Result:**
*[Insert Video/GIF: The plugin loaded in a DAW, demonstrating real-time parameter tweaking and audio processing]*

---

## 10. Watermark Stamper

**The Concept:** 
A cross-platform app that allows creators to batch-apply watermarks to video files efficiently. Designed for speed and ease of use, eliminating the need to open heavy video editors just to brand content.

**The Logic & Workflow:** 
I needed a high-performance engine to process video without massive overhead. I chose Flutter for a unified UI across all platforms. I directed the AI to integrate FFMPEG bindings, prompting it to calculate optimal watermark scaling algorithms so the logo maintains proportion regardless of the video's resolution.

**The Logic Triumphs:** 
Running FFMPEG directly on the main thread blocked the UI completely during exports. I prompted the AI to utilize Dart's Isolate (multithreading) architecture to run the FFMPEG commands asynchronously, streaming the progress back to the UI to create a real-time progress bar without freezing the app.

**The Tech Stack:** 
- **Framework:** Flutter, Dart
- **Engine:** FFMPEG

**The Result:**
*[Insert Video/GIF: Dragging a batch of videos into the app and exporting watermarked versions instantly]*

---

## 11. Lux Photo Album Creator

**The Concept:** 
A digital tool to compile, arrange, and export elegant photo albums. Aimed at photographers needing a quick way to generate client proofs or beautiful digital keepsakes.

**The Logic & Workflow:** 
I architected the app using React and Electron. The logic workflow required the AI to build a drag-and-drop grid system that recalculated page layouts dynamically based on image aspect ratios.

**The Logic Triumphs:** 
Loading hundreds of raw, high-resolution images into the DOM instantly crashed the Electron memory limit. I guided the AI to implement virtualized lists and aggressive image downsampling for thumbnails on the local disk before rendering them, keeping memory usage minimal while supporting huge albums.

**The Tech Stack:** 
- **Frontend:** React, Vite, Electron, Capacitor

**The Result:**
*[Insert Video/GIF: User dragging dropping high-res images into a dynamic layout and exporting the album]*

---

## 12. Wonder Doggs (OpenBOR Game)

**The Concept:** 
A complete 2D Beat 'em up game built on the OpenBOR engine. Designed to evoke the classic arcade feel of the 90s with custom characters, movesets, and level design.

**The Logic & Workflow:** 
OpenBOR relies on specific C-style scripting and strict folder structures. I used agentic workflows to generate complex character animation scripts, hitboxes, and enemy AI logic, breaking down the enemy behavior patterns and prompting the AI to write state machines for the bosses.

**The Logic Triumphs:** 
The generated enemy AI would easily get stuck in corners of the screen due to poor pathfinding. I stepped in and structured a C-script state machine with specific collision fallback logic, ensuring enemies always circled back to the player naturally and maintained a fair difficulty curve.

**The Tech Stack:** 
- **Engine:** OpenBOR
- **Languages:** C-Scripting

**The Result:**
*[Insert Video/GIF: Gameplay footage showing a combo system and custom boss fight]*

---

## 13. LUX Music Agent

**The Concept:** 
An AI-powered music assistant designed to automate tedious tasks for music producers and listeners, streamlining music discovery, organization, or metadata tagging.

**The Logic & Workflow:** 
I designed this agent to act as a background worker. By defining clear input parameters, I prompted the AI to utilize various audio and web APIs to fetch tracks, analyze audio signatures, or tag MP3s autonomously. 

**The Logic Triumphs:** 
Rate limits on the external audio processing APIs kept throwing 429 errors during bulk tagging operations, crashing the script. I instructed the AI to implement an exponential backoff algorithm and a request queuing system, ensuring a 100% success rate without getting the IP banned.

**The Tech Stack:** 
- **Backend:** Python, Audio Processing APIs, LLM Orchestration

**The Result:**
*[Insert Video/GIF: Terminal or UI showing the agent successfully processing a batch of music files]*

---

## 14. LUX PNG Tuber

**The Concept:** 
A lightweight broadcasting tool for streamers, animating a 2D avatar based on microphone input. A perfect, low-resource alternative to full 3D VTubing setups.

**The Logic & Workflow:** 
The app needed to react to audio thresholds instantly. I prompted the AI to build real-time audio listener logic that triggers specific sprite states (talking, idle, blinking) based on decibel levels, allowing custom sprite uploads and easy threshold calibration.

**The Logic Triumphs:** 
The Web Audio API analyser node was initially too sensitive to background noise (like typing or AC humming). I implemented a dynamic noise-gate logic tree that calibrates to the room's ambient volume on startup, ensuring the avatar only animates when the user actually speaks.

**The Tech Stack:** 
- **Frontend:** React/HTML5, Web Audio API

**The Result:**
*[Insert Video/GIF: The 2D avatar talking in sync with microphone input]*

---

## 15. LUX Career Agent

**The Concept:** 
An automated professional networking and job-application agent designed to scrape opportunities, tailor resumes, and optimize outreach.

**The Logic & Workflow:** 
I instructed the LLM to parse job descriptions, extract key requirements, and generate tailored cover letters/resume tweaks based on a master profile. 

**The Logic Triumphs:** 
Scraping modern job boards often triggered aggressive Cloudflare bot-protection. I guided the AI to use Playwright with stealth plugins and randomized, human-like delays, allowing the agent to bypass anti-bot measures ethically and reliably to fetch job listings.

**The Tech Stack:** 
- **Backend:** Python, Selenium/Playwright, LLM Integration (OpenAI/Gemini APIs)

**The Result:**
*[Insert Video/GIF: The agent scanning a job board and generating a highly tailored application]*

---

## 16. Glass Tongue

**The Concept:** 
A sophisticated desktop OCR and translation utility designed for real-time text extraction and translation from images or screen captures. 

**The Logic & Workflow:** 
I engineered the backend using Python, integrating OCR engines (like Tesseract) and translation APIs. The workflow required the AI to continuously grab a defined screen region, parse the text, and instantly display the translated overlay without lagging the primary display.

**The Logic Triumphs:** 
The OCR engine often failed to read stylized fonts in video games or comics accurately. I steered the AI to implement a pre-processing pipeline in OpenCV that converts the captured region to high-contrast grayscale and upscales the resolution before feeding it to the OCR, drastically improving text recognition accuracy.

**The Tech Stack:** 
- **Backend:** Python, OpenCV, Tesseract OCR, Translation APIs
- **Platforms:** Windows / Android (via Kivy/BeeWare)

**The Result:**
*[Insert Video/GIF: App capturing foreign text on screen and overlaying the translation instantly]*

---

## 17. Lux Video Merger (Video Collage Soft)

**The Concept:** 
A robust desktop tool for content creators to effortlessly stitch together multiple video clips into custom layouts and collages, perfect for social media batch processing.

**The Logic & Workflow:** 
Built with a Node.js backend and wrapped in Electron for desktop, the tool needed to handle heavy I/O video processing. I prompted the AI to utilize FFMPEG to handle the underlying video concatenation and cropping, while providing a clean frontend UI to let users visually arrange the layout grid.

**The Logic Triumphs:** 
Merging videos with different resolutions and frame rates often caused FFMPEG to crash or produce distorted aspect ratios. I guided the AI to write a pre-processing validation script that normalizes all input clips to a standardized 1080p/60fps baseline before executing the final grid merge, ensuring a flawless export every time.

**The Tech Stack:** 
- **Frontend/Backend:** Node.js, Electron, HTML/JS
- **Engine:** FFMPEG

**The Result:**
*[Insert Video/GIF: Dragging multiple clips into a grid layout and exporting a seamless video collage]*

---

## 18. Lux Mashup Guru

**The Concept:** 
An intelligent desktop app designed for DJs and producers. You input a song name or Spotify link, and the app automatically queries the Spotify database to suggest perfect mashup pairings based on rhythm, BPM, musical structure, and tonality.

**The Logic & Workflow:** 
I orchestrated the app's frontend and integrated it with the Spotify Web API to fetch deep audio features (BPM, Key, Danceability). Because standard web browsers enforce strict Cross-Origin Resource Sharing (CORS) policies that block direct API connections, I directed the AI to wrap the web app into an Electron desktop framework, allowing us to interact with the API natively.

**The Logic Triumphs:** 
Connecting to Spotify's OAuth server became a massive roadblock. Recent versions of Chromium (inside Electron) have become so strict that they blocked our API requests in the background even with `webSecurity` turned off. I intervened and steered the logic to completely bypass Chromium's network engine. I prompted the AI to rewrite the authentication flow using Node.js native networking instead, allowing the app to talk to Spotify directly through the OS. I then successfully packaged the app into a standalone Windows `.exe` for seamless distribution.

**The Tech Stack:** 
- **Framework:** Electron, Node.js
- **API:** Spotify Web API (Native Networking)
- **Platforms:** Windows Desktop (.exe)

**The Result:**
*[Insert Video/GIF: User pasting a song link and instantly receiving a list of perfectly matched mashup suggestions]*
"""

projects = []
blocks = re.split(r'## \d+\. ', text)[1:]
for block in blocks:
    lines = block.strip().split('\n')
    title = lines[0].strip()
    
    concept_match = re.search(r'\*\*The Concept:\*\* (.*?)(?=\*\*The Logic|$)', block, re.DOTALL)
    concept = concept_match.group(1).strip() if concept_match else ""
    
    logic_match = re.search(r'\*\*The Logic & Workflow:\*\* (.*?)(?=\*\*The Logic Triumphs|$)', block, re.DOTALL)
    logic = logic_match.group(1).strip() if logic_match else ""
    
    triumphs_match = re.search(r'\*\*The Logic Triumphs:\*\* (.*?)(?=\*\*The Tech Stack|$)', block, re.DOTALL)
    triumphs = triumphs_match.group(1).strip() if triumphs_match else ""
    
    tech_match = re.search(r'\*\*The Tech Stack:\*\* (.*?)(?=\*\*The Result|$)', block, re.DOTALL)
    tech = tech_match.group(1).strip() if tech_match else ""
    # cleaning tech to a single line or list
    tech = " ".join([l.strip() for l in tech.split('\n') if l.strip()])
    
    result_match = re.search(r'\*\*The Result:\*\* (.*)', block, re.DOTALL)
    result = result_match.group(1).strip() if result_match else ""
    # clean the trailing ---
    result = re.sub(r'---.*$', '', result, flags=re.DOTALL).strip()
    
    projects.append({
        "title": title,
        "category": "Software Engineering",
        "logoUrl": "",
        "youtubeId": "",
        "concept": concept,
        "logicWorkflow": logic,
        "logicTriumphs": triumphs,
        "tech": tech,
        "result": result
    })

import pprint
with open("c:\\Users\\wagre\\Downloads\\PORTFOLIO\\new-portfolio\\parsed_projects.json", "w", encoding="utf-8") as f:
    json.dump(projects, f, indent=2, ensure_ascii=False)
