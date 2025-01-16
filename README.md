# ID Generator Performance Tests

Este repositório contém testes de performance e consumo de memória de diferentes métodos de geração de IDs. O objetivo é comparar a eficiência de cada método em termos de:

- Tempo de geração.
- Taxa de geração (IDs por segundo).
- Memória usada por ID.
- Memória total consumida durante a geração.

## 📂 Estrutura do Repositório

```plaintext
.
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── test-cuid.js        # Teste para CUID
├── test-nanoid.js      # Teste para Nanoid
├── test-snowflake.js   # Teste para Snowflake
├── test-ulid.js        # Teste para ULID
├── test-uuid.js        # Teste para UUID
└── docs
    └── comparation
        ├── ids.png         # Comparação geral (todos os gráficos)
        ├── output (1).png  # Gráfico 1: Taxa de Geração
        ├── output (2).png  # Gráfico 2: Uso de Memória por ID
        ├── output (3).png  # Gráfico 3: Memória Total Usada
        ├── output (4).png  # Gráfico 4: Tempo de Geração
        └── output.png      # Gráficos consolidados
```

## 🧪 Testes Realizados

Os testes foram realizados utilizando um servidor único para todos os métodos de geração de IDs. O ambiente foi configurado para maximizar a memória alocada no Node.js com o parâmetro `--max-old-space-size=8192`.

### Métodos Testados

1. **UUID** - Geração de IDs padrão com `uuid` (v4).
2. **CUID** - Geração com o pacote `cuid`.
3. **Nanoid** - Geração compacta e eficiente com `nanoid`.
4. **Snowflake** - Geração com base em tempo e identificadores únicos por cluster com `@sapphire/snowflake`.
5. **ULID** - Geração lexicograficamente ordenável com `ulid`.

### Dados Coletados

- **Taxa de Geração**: Quantidade de IDs gerados por segundo.
- **Memória Usada por ID**: Consumo médio de memória por ID.
- **Memória Total Usada**: Memória ocupada durante a execução do teste.
- **Tempo de Geração**: Tempo total para gerar 10 milhões de IDs.

## 📊 Resultados

Os gráficos gerados a partir dos testes estão disponíveis na pasta [docs/comparation](./docs/comparation). Você pode visualizar:

- **ids.png**: Gráfico consolidado com todas as comparações.
- Gráficos individuais:
  - Taxa de Geração.
  - Uso de Memória por ID.
  - Memória Total Usada.
  - Tempo de Geração.

### Resumo dos Resultados

| Método        | Taxa de Geração (IDs/s) | Tempo Total (s) | Memória Usada (MB) | Memória por ID (Bytes) |
| ------------- | ----------------------- | --------------- | ------------------ | ---------------------- |
| **UUID**      | 5.496.082               | 18.163          | 5056.70            | 53.02                  |
| **CUID**      | 1.512.667               | 66.079          | 2162.13            | 22.67                  |
| **Nanoid**    | 6.840.905               | 14.590          | 3532.01            | 37.04                  |
| **Snowflake** | 11.002.774              | 9.078           | 702.54             | 7.37                   |
| **ULID**      | 26.858                  | 372.300         | 2436.73            | 255.51                 |

## 🛠️ Como Executar os Testes

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Execute os testes para cada método:

   - **UUID**:
     ```bash
     node --max-old-space-size=8192 test-uuid.js
     ```
   - **CUID**:
     ```bash
     node --max-old-space-size=8192 test-cuid.js
     ```
   - **Nanoid**:
     ```bash
     node --max-old-space-size=8192 test-nanoid.js
     ```
   - **Snowflake**:
     ```bash
     node --max-old-space-size=8192 test-snowflake.js
     ```
   - **ULID**:
     ```bash
     node --max-old-space-size=8192 test-ulid.js
     ```

3. Visualize os resultados no terminal ou gere novos gráficos com os dados coletados.

## 📜 Licença

Este repositório está licenciado sob a [MIT License](./LICENSE).

---

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
