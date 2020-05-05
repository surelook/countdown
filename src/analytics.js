import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
 
if (GA_TRACKING_ID) {
    const analytics = Analytics({
        app: 'countdown',
        plugins: [
          googleAnalytics({
            trackingId: GA_TRACKING_ID
          })
        ]
      })

    analytics.page()
}
