import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.5846 17.0112C22.1549 17.554 21.102 17.9412 21.102 17.9412L13.2697 20.7579V18.6806L19.0337 16.6244C19.6878 16.3898 19.7883 16.0581 19.2566 15.884C18.7259 15.7094 17.765 15.7594 17.1104 15.9951L13.2697 17.3494V15.1936L13.491 15.1185C13.491 15.1185 14.6009 14.7253 16.1614 14.5522C17.722 14.3801 19.6329 14.5757 21.133 15.1451C22.8235 15.6799 23.0139 16.4683 22.5846 17.0112ZM14.0152 13.4741V8.16195C14.0152 7.53808 13.9003 6.96374 13.3156 6.80115C12.8679 6.65756 12.5901 7.07381 12.5901 7.69718V21L9.0067 19.8613V4C10.5303 4.28317 12.75 4.95256 13.9433 5.3553C16.978 6.39841 18.0068 7.69667 18.0068 10.6219C18.0068 13.4731 16.2489 14.5537 14.0152 13.4741ZM2.43161 18.4635C0.696139 17.9742 0.407311 16.9546 1.19834 16.3673C1.92941 15.825 3.17267 15.4167 3.17267 15.4167L8.31061 13.5876V15.6729L4.61331 16.9976C3.9602 17.2323 3.85976 17.5645 4.39044 17.7386C4.92163 17.9127 5.88305 17.8632 6.53717 17.628L8.31061 16.9836V18.8492C8.19818 18.8692 8.07275 18.8893 7.95682 18.9088C6.18288 19.1989 4.2935 19.0779 2.43161 18.4635Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaystationLine'

/**
 * Remix Icon: Playstation Line
 * @see {@link https://remixicon.com/icon/playstation-line Remix Icon Docs}
 */
export const PlaystationLine = memo(Icon)
