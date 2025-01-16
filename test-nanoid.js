const { nanoid } = require("nanoid");

console.time("Nanoid Generation");

// Configurar o número de IDs a serem gerados
const numIds = 10_000_000; // 10 milhões de IDs por execução
const ids = new Set();

// Capturar uso inicial de memória
const initialMemory = process.memoryUsage().heapUsed / 1024 / 1024; // em MB

// Gerar IDs
for (let i = 0; i < numIds; i++) {
  const id = nanoid(); // Gera um ID padrão com 21 caracteres
  ids.add(id); // Armazena os IDs em um Set para verificar unicidade
}

// Capturar uso final de memória
const finalMemory = process.memoryUsage().heapUsed / 1024 / 1024; // em MB

// Taxa de geração de IDs (IDs por segundo)
const generationRate = (numIds * 10) / process.uptime(); // Total de IDs gerados dividido pelo tempo de execução
console.log(`Generation Rate: ${generationRate.toFixed(2)} IDs/second`);

// Uso de memória por ID (em bytes)
const memoryPerId =
  ((finalMemory - initialMemory) * 1024 * 1024) / (numIds * 10); // Conversão de MB para bytes
console.log(`Memory per ID: ${memoryPerId.toFixed(2)} bytes/ID`);

console.timeEnd("Nanoid Generation");
console.log(`Generated ${ids.size} unique IDs.`);
console.log(`Initial Memory: ${initialMemory.toFixed(2)} MB`);
console.log(`Final Memory: ${finalMemory.toFixed(2)} MB`);
console.log(`Memory Used: ${(finalMemory - initialMemory).toFixed(2)} MB`);
