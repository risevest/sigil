import { memo } from 'react'
import type { IconProps } from '../../types'
const SensorLine = /* @__PURE__ */ memo(function SensorLine(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z" />
    </svg>
  )
})
/**
 * Remix Icon: Sensor Line
 * @see {@link https://remixicon.com/icon/sensor-line Remix Icon Docs}
 */
export { SensorLine }
