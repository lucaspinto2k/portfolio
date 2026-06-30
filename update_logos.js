const fs = require('fs');

const updates = [
  { title: '"title": "Photo Tint Modifier",', replaceWith: '"title": "Photo Tint Modifier",\n            "category": "AI & Automation",\n            "logoUrl": "/images/projects/photo_tint.png",' },
  { title: '"title": "Smart File Organizer",', replaceWith: '"title": "Smart File Organizer",\n            "category": "AI & Automation",\n            "logoUrl": "/images/projects/fileorganizer.png",' },
  { title: '"title": "Lux Iconic VST",', replaceWith: '"title": "Lux Iconic VST",\n            "category": "Audio & VST Plugins",\n            "logoUrl": "/images/projects/lux.png",' },
  { title: '"title": "LPTV (Broadcast TV Ecosystem)",', replaceWith: '"title": "LPTV (Broadcast TV Ecosystem)",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/lptv.png",' },
  { title: '"title": "LPRadio (Immersive Radio Spinoff)",', replaceWith: '"title": "LPRadio (Immersive Radio Spinoff)",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/lpradio.png",' },
  { title: '"title": "CRT TV Simulator",', replaceWith: '"title": "CRT TV Simulator",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/crt_tv_sim.png",' },
  { title: '"title": "Lux iSim (iPod Classic Simulator)",', replaceWith: '"title": "Lux iSim (iPod Classic Simulator)",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/ipodsim.png",' },
  { title: '"title": "AI-VA Cassette Simulator",', replaceWith: '"title": "AI-VA Cassette Simulator",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/cassette.png",' },
  { title: '"title": "LUX PNG Tuber",', replaceWith: '"title": "LUX PNG Tuber",\n            "category": "Creative Technology",\n            "logoUrl": "/images/projects/png_tuber.png",' },
  
  // pt.ts categories
  { title: '"title": "Photo Tint Modifier",', ptReplaceWith: '"title": "Photo Tint Modifier",\n            "category": "IA e Automação",\n            "logoUrl": "/images/projects/photo_tint.png",' },
  { title: '"title": "Smart File Organizer",', ptReplaceWith: '"title": "Smart File Organizer",\n            "category": "IA e Automação",\n            "logoUrl": "/images/projects/fileorganizer.png",' },
  { title: '"title": "Lux Iconic VST",', ptReplaceWith: '"title": "Lux Iconic VST",\n            "category": "Plugins de Áudio e VST",\n            "logoUrl": "/images/projects/lux.png",' },
  { title: '"title": "LPTV (Ecossistema de TV Broadcasting)",', ptReplaceWith: '"title": "LPTV (Ecossistema de TV Broadcasting)",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/lptv.png",' },
  { title: '"title": "LPRadio (Spinoff de Rádio Imersiva)",', ptReplaceWith: '"title": "LPRadio (Spinoff de Rádio Imersiva)",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/lpradio.png",' },
  { title: '"title": "CRT TV Simulator",', ptReplaceWith: '"title": "CRT TV Simulator",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/crt_tv_sim.png",' },
  { title: '"title": "Lux iSim (iPod Classic Simulator)",', ptReplaceWith: '"title": "Lux iSim (iPod Classic Simulator)",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/ipodsim.png",' },
  { title: '"title": "AI-VA Cassette Simulator",', ptReplaceWith: '"title": "AI-VA Cassette Simulator",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/cassette.png",' },
  { title: '"title": "LUX PNG Tuber",', ptReplaceWith: '"title": "LUX PNG Tuber",\n            "category": "Tecnologia Criativa",\n            "logoUrl": "/images/projects/png_tuber.png",' }
];

function updateFile(filename, isPt) {
  let content = fs.readFileSync(filename, 'utf-8');
  for (const update of updates) {
    if (isPt && !update.ptReplaceWith) continue;
    if (!isPt && !update.replaceWith) continue;
    
    const searchString = update.title + '\\n            "category": "' + (isPt ? '[^"]+' : '[^"]+') + '",\\n            "logoUrl": ""';
    const regex = new RegExp(searchString.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)'), 'g');
    
    // Actually simpler: just find the index of title, and replace the 3 lines.
    let index = content.indexOf(update.title);
    if (index !== -1) {
        let endOfLogoUrl = content.indexOf('"logoUrl": "",', index) + '"logoUrl": "",'.length;
        if(endOfLogoUrl > index && endOfLogoUrl - index < 150) {
             let toReplace = content.substring(index, endOfLogoUrl);
             content = content.replace(toReplace, isPt ? update.ptReplaceWith : update.replaceWith);
        }
    }
  }

  fs.writeFileSync(filename, content);
}

updateFile('src/locales/en.ts', false);
updateFile('src/locales/pt.ts', true);
console.log('done');
