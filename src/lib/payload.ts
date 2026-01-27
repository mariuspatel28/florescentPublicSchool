import 'server-only'
import { getPayload } from 'payload'
import configPromise from '@/payload/payload.config'

export async function getPayloadClient() {
  return await getPayload({
    config: configPromise,
  })
}