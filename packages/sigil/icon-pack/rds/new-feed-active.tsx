import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 28 29" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="M21.75 4.6H9.77c-.91 0-1.66.7-1.73 1.6v7.11l-.02 4.16v.12h-1.5v-3.53l.01-1.5H4V24.1h19.5V6.35c0-.97-.78-1.75-1.75-1.75m-1.28 15.71-8.98-.02v-1.5l8.98.02zm0-2.58h-8.98v-1.51h8.98zm-.66-4.33a2.73 2.73 0 0 1-3.89-.01c-.51-.5-.8-1.19-.8-1.93s.29-1.44.81-1.95c.5-.51 1.19-.8 1.94-.8 1.51 0 2.75 1.23 2.75 2.75 0 .74-.29 1.43-.81 1.94"
      />
      <Path
        fill={color}
        stroke="#fff"
        strokeWidth={1.6}
        d="M23.4.8a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z"
      />
    </Svg>
  )
})
Icon.displayName = 'NewFeedActive'
export const NewFeedActive = Icon
