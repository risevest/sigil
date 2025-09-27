import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M23.5 23.5H4V11.96h4.02V5.75c0-.96.79-1.75 1.75-1.75h11.98c.96 0 1.75.79 1.75 1.75zM5.5 22H22V5.75c0-.14-.11-.25-.25-.25H9.77c-.14 0-.25.11-.25.25v11.12h-1.5v-3.41H5.5zm14.97-2.29-8.98-.02v-1.5l8.99.02v1.5zm0-2.57-8.98-.02v-1.5l8.99.02v1.5zm-2.6-3.53c-.74 0-1.43-.29-1.95-.82-.51-.5-.8-1.19-.8-1.93s.29-1.43.82-1.95c.5-.51 1.19-.8 1.93-.8 1.52 0 2.75 1.23 2.75 2.75 0 .74-.29 1.43-.81 1.94-.51.52-1.2.81-1.94.81m0-4c-.33 0-.64.13-.87.36-.25.24-.38.55-.38.89s.13.64.36.87c.48.5 1.3.48 1.76.01h.01c.23-.24.36-.55.36-.89 0-.69-.56-1.25-1.25-1.25z" />
    </Svg>
  )
})
Icon.displayName = 'FeedInactive'
export const FeedInactive = Icon
