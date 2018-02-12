import { NativeModules } from 'react-native'

const RNASegmentIO = NativeModules.RNASegmentIO || NativeModules.SegmentModule

export default {
  setup(key, options = {}) {
    return RNASegmentIO.setup(key, options)
  },

  identify(userId, traits = {}) {
    RNASegmentIO.identify(userId, traits)
  },

  track(event, properties = {}) {
    RNASegmentIO.track(event, properties)
  },

  screen(name, properties = {}) {
    RNASegmentIO.screen(name, properties)
  },

  group(groupId, traits = {}) {
    RNASegmentIO.group(groupId, traits)
  },

  alias(newId) {
    RNASegmentIO.alias(newId)
  },

  reset() {
    RNASegmentIO.reset()
  },

  flush() {
    RNASegmentIO.flush()
  },

  enable() {
    RNASegmentIO.enable()
  },

  disable() {
    RNASegmentIO.disable()
  },
}

export const AnalyticsConstants = {
  enableAdvertisingTracking: RNASegmentIO.enableAdvertisingTracking,
  flushAt: RNASegmentIO.flushAt,
  recordScreenViews: RNASegmentIO.recordScreenViews,
  shouldUseBluetooth: RNASegmentIO.shouldUseBluetooth,
  shouldUseLocationServices: RNASegmentIO.shouldUseLocationServices,
  trackApplicationLifecycleEvents: RNASegmentIO.trackApplicationLifecycleEvents,
  trackAttributionData: RNASegmentIO.trackAttributionData,
  trackDeepLinks: RNASegmentIO.trackDeepLinks,
  debug: RNASegmentIO.debug,
}
