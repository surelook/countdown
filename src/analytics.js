import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
 
const trackingId = process.env.GA_TRACKING_ID

if (trackingId) {
    const analytics = Analytics({
        app: 'countdown',
        plugins: [
          googleAnalytics({
            trackingId: trackingId
          })
        ]
      })

    /* Track a page view */
    analytics.page()
}
