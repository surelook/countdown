import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
 
const trackingIDd = process.env.GA_TRACKING_ID

if (trackingId) {
    const analytics = Analytics({
        app: 'countdown',
        plugins: [
          googleAnalytics({
            trackingId: trackingIDd
          })
        ]
      })

    /* Track a page view */
    analytics.page()
}
