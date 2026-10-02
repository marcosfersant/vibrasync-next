# VibraSync Prototype 0.1

Protótipo local do novo núcleo visual e de áudio do VibraSync.

## Já funcional
- Web Audio: seno, quadrada, triangular e serra.
- Camadas independentes de frequência original, ruído branco e ruído marrom/castanho.
- Controles de volume separados.
- Interface azul/verde inspirada no mockup aprovado.
- Visual anatômico provisório animado e arquitetura preparada para substituir por GLB/Three.js.
- Área reservada para futura integração de aquisição/bioimpedância.

## Referências técnicas estudadas
- Routhleck/tone-generator — arquitetura Web Audio e ruídos.
- pengowray/sweep — geração/sweep/worker/WAV.
- vinaysingh-05/human-atlas — arquitetura anatômica Three.js/WebGL.
- Grypa-JJ/anatomy-atlas-3d — atlas e organização anatômica.

O código deste protótipo foi escrito separadamente; não inclui modelos anatômicos de terceiros. Antes de importar modelos/datasets, revisar suas licenças e atribuições.

## Rodar
npm install
npm run dev
