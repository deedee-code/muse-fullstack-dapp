import { Router } from 'express'
import * as artworkController from '@/controllers/artworkController'
import { cacheMiddleware } from '@/middleware/cacheMiddleware'

const router = Router()

// Public routes with caching
router.get('/', cacheMiddleware(300), artworkController.getArtworks)
router.get('/:id', cacheMiddleware(600), artworkController.getArtworkById)

// Protected routes (require auth in real app)
router.post('/', artworkController.createArtwork)
router.put('/:id', artworkController.updateArtwork)
router.delete('/:id', artworkController.deleteArtwork)

export default router
