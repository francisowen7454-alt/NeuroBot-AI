# NeuroTotoInsight customer automation

A working Node.js web and WhatsApp-webhook backend for the NeuroTotoInsight catalogue, evidence-backed order workflow, payment review, delivery capture, assessment, appointments, AI-safe handoff, and admin data endpoints.

## Run

```bash
cp .env.example .env # then set ADMIN_TOKEN at minimum
npm test
npm start
```

Open `http://localhost:3000`. The service persists its operational data in `data/neurototoinsight.json` and stores payment-proof images in `uploads/`. These paths must be durable, access-controlled storage in deployment; the application never marks a screenshot upload as paid.

## Production configuration

Set a strong `ADMIN_TOKEN`, use TLS and a reverse proxy, restrict the admin endpoint, and back up the data path. Configure `DATA_FILE` for durable storage. A JSON file is deliberately usable without pretending a database connection exists; for multi-instance production replace `src/store.js` with a transactional database adapter.

### WhatsApp Cloud API (optional, real integration)

Set `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, and `ADMIN_WHATSAPP` to enable the paid-order administrator notification. Without all three, the API returns `delivered: false` with the explicit reason and sends nothing. Configure Meta to deliver an inbound webhook to `POST /webhooks/whatsapp`; this endpoint records the message and returns its safe response. Production deployment should add Meta's webhook verification/signature validation and an outbound reply worker linked to the Cloud API credentials.

### Product-source policy

No product ingredients, dosage, treatment claims, benefits, images, or product recommendations have been invented. The seeded catalogue explicitly labels this content as awaiting verified supplied product materials. An administrator can update the persisted records only after source review. No product PDFs were present in this repository at implementation time.

## API summary

- `GET /api/catalog` — catalogue, regions and editable bus-company list.
- `POST /api/orders` — validates and saves an order, uploads proof, assigns `NTI-####`, and leaves payment `PENDING`.
- `PATCH /api/admin/orders/:id` — bearer-token protected payment transition. `PAID` attempts the configured WhatsApp administrator notification.
- `POST /api/assessments`, `/api/appointments`, `/api/ai` — save real assessment, appointment, and human-handoff workflows.
- `GET /api/admin/data` — bearer-token protected operational database view.

This educational system never diagnoses, prescribes pediatric dosage, or promises medical outcomes. Emergency keywords return urgent-care guidance.
