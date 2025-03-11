import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg fill={color} viewBox="0 0 28 28" height={size} width={size} {...otherProps}>
      <Path d="M22.83 10.585L14.82 4.375C14.19 3.875 13.31 3.875 12.67 4.375L4.67 10.585C4.24 10.915 4 11.425 4 11.965V24.225H23.5V11.965C23.5 11.435 23.25 10.915 22.83 10.585ZM15.69 19.435C15.18 19.955 14.49 20.245 13.75 20.245C13.01 20.245 12.3 19.945 11.79 19.425C11.29 18.915 11 18.225 11 17.495C11 16.765 11.29 16.065 11.8 15.555C12.31 15.035 13 14.745 13.75 14.745C15.27 14.745 16.5 15.975 16.5 17.495C16.5 18.235 16.21 18.925 15.69 19.435Z" />
    </Svg>
  )
}

Icon.displayName = 'HomeActive'

export const HomeActive = memo(Icon)
