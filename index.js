/* @flow */
import { NativeModules } from 'react-native'

const RNASegmentIO = NativeModules.RNASegmentIO || NativeModules.SegmentModule

type GroupId = string
type KeyValueMap = Object
type SetupOptions = {
  enableAdvertisingTracking?: boolean,
  flushAt?: number,
  recordScreenViews?: boolean,
  shouldUseBluetooth?: boolean,
  shouldUseLocationServices?: boolean,
  trackApplicationLifecycleEvents?: boolean,
  trackAttributionData?: boolean,
  trackDeepLinks?: boolean,
  debug?: boolean,
}
type UserId = string

export default {
  setup(key: string, options: SetupOptions = {}) {
    return RNASegmentIO.setup(key, options)
  },

  identify(userId: UserId, traits: KeyValueMap = {}) {
    RNASegmentIO.identify(userId, traits)
  },

  track(event: string, properties: KeyValueMap = {}) {
    RNASegmentIO.track(event, properties)
  },

  screen(name: string, properties: KeyValueMap = {}) {
    RNASegmentIO.screen(name, properties)
  },

  group(groupId: GroupId, traits: KeyValueMap = {}) {
    RNASegmentIO.group(groupId, traits)
  },

  alias(newId: UserId) {
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

export const AnalyticsConstants: { [key: $Keys<SetupOptions>]: string } = {
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
