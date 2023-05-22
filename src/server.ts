import { env } from '@/env'
import { application } from '@/application'

application.listen(env.PORT, () =>
  console.log(`HTTP Request Server Running 🚀 port:${env.PORT}`),
)
