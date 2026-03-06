Fechou. Vou te entregar um **README profissional**, direto, sem marketing vazio, do jeito que projeto pessoal sério pede. Pode colar isso no repositório sem medo.

---

# StudyFlow 📚

**StudyFlow** é um sistema web de organização de estudos desenvolvido como projeto pessoal para aprofundar conhecimentos em **Next.js (App Router)**, **Server Actions**, **Prisma ORM** e **PostgreSQL**.

O foco do projeto é aplicar conceitos modernos de desenvolvimento full stack, com autenticação, dashboard interativo e persistência de dados real.

---

## ✨ Funcionalidades

* Autenticação de usuários
* Dashboard com visão geral dos estudos
* Cadastro de atividades de estudo

  * Nome da atividade
  * Matéria
  * Data e hora
  * Prioridade (baixa, média, alta)
* Listagem de próximas atividades
* Atualização automática da interface após criação
* Integração com banco de dados PostgreSQL via Prisma

---

## 🧱 Tecnologias utilizadas

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **Server Actions**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide Icons**

---

## 🗂️ Estrutura do projeto (resumida)

```txt
src/
 ├─ app/
 │   ├─ (protected)/
 │   │   ├─ dashboard/
 │   │   └─ upcoming/
 │   │       ├─ actions.ts      # Server Actions
 │   │       └─ page.tsx        # Formulário (Client)
 │   └─ api/ (se necessário)
 ├─ lib/
 │   └─ prisma.ts               # Prisma Client singleton
 └─ components/
```

---

## 🧩 Modelos de dados (Prisma)

### User

```prisma
model User {
  id         String     @id @default(uuid())
  email      String     @unique
  password   String
  activities Activity[]
}
```

### Activity

```prisma
model Activity {
  id        String   @id @default(uuid())
  act_name  String
  subject   String
  dueAt     DateTime
  priority  Priority
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  userId String
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([dueAt])
}
```

---

## 🚀 Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd studyflow
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/studyflow"
```

### 4. Rodar migrações

```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor

```bash
npm run dev
```

Acesse:
👉 `http://localhost:3000`

---

## 🧠 Conceitos aplicados

* Server Actions para mutações de dados
* Separação clara entre Client Components e Server Components
* Uso de `FormData` com componentes não nativos (shadcn)
* Persistência de dados com Prisma + PostgreSQL
* Revalidação de rotas com `revalidatePath`
* Organização de código por domínio

---

## 📌 Observações

* Componentes como DatePicker e Select do shadcn **não enviam dados automaticamente** no formulário — por isso são utilizados `inputs hidden` para integração com Server Actions.
* O projeto prioriza clareza arquitetural e aprendizado, não complexidade desnecessária.

---

## 📈 Próximos passos (roadmap)

* [ ] Autenticação com Auth.js
* [ ] Metas semanais de estudo
* [ ] Registro de sessões de estudo
* [ ] Gráficos de desempenho
* [ ] UI otimista
* [ ] Filtros e ordenação avançada

---

## 👤 Autor

Projeto desenvolvido por **Biel**
Estudante de Sistemas de Computação | Desenvolvimento Web
Parque Tecnológico do Mar – Angra dos Reis

---

Se quiser, eu adapto esse README:

* pra inglês
* pra um tom mais corporativo
* ou deixo mais “developer hardcore” com decisões técnicas explicadas