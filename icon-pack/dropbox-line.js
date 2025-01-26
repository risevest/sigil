import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.65039 17.2607L12.0422 19.4216L15.434 17.2607L17.2942 18.4457L12.0422 21.7916L6.79021 18.4457L8.65039 17.2607ZM7.77356 8.98007L10.1669 7.42738L7.74124 5.85351L5.28562 7.36988L7.77356 8.98007ZM9.61315 10.1706L12.0045 11.7183L14.3953 10.1709L12.0042 8.61946L9.61315 10.1706ZM13.845 12.9095L16.2689 14.4782L18.7187 12.9761L16.2335 11.3636L13.845 12.9095ZM12.0042 6.2354L16.2413 3.48657L22.4656 7.3302L18.073 10.1731L22.4669 13.024L16.2401 16.8419L12.0045 14.1006L7.76898 16.8419L1.54004 13.0241L5.93528 10.1727L1.54332 7.3302L7.7677 3.48657L12.0042 6.2354ZM13.8415 7.42749L16.2349 8.9804L18.7233 7.36988L16.2677 5.85349L13.8415 7.42749ZM10.164 12.9095L7.77487 11.3632L5.2889 12.976L7.73997 14.4783L10.164 12.9095Z" />
    </Svg>
  )
}

Icon.displayName = 'DropboxLine'

/**
 * Remix Icon: Dropbox Line
 * @see {@link https://remixicon.com/icon/dropbox-line Remix Icon Docs}
 */
export const DropboxLine = memo(Icon)
