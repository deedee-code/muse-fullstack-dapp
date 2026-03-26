import { Router } from 'express'
import { getUserProfile, updateUserProfile } from '@/controllers/userController'
import { userProfileCache } from '@/middleware/cacheMiddleware'

const router = Router()

router.get('/profile/:address', userProfileCache, getUserProfile)
router.put('/profile/:address', updateUserProfile)

export default router
