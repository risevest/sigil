import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM8.59114 13.8089C8.52934 13.5486 8.49663 13.277 8.49663 12.9978C8.49663 12.7186 8.52933 12.4471 8.59112 12.1868L7.59998 11.6146L8.59949 9.88335L9.59133 10.456C9.98424 10.0843 10.4633 9.80275 10.9954 9.64438V8.5H12.9944V9.64438C13.5265 9.80274 14.0056 10.0843 14.3985 10.4559L15.3904 9.88325L16.39 11.6145L15.3987 12.1867C15.4605 12.447 15.4932 12.7186 15.4932 12.9978C15.4932 13.277 15.4605 13.5485 15.3987 13.8088L16.39 14.3811L15.3905 16.1123L14.3986 15.5396C14.0057 15.9113 13.5266 16.1928 12.9945 16.3512V17.4956H10.9955V16.3513C10.4634 16.1929 9.98434 15.9114 9.59141 15.5397L8.59954 16.1124L7.59998 14.3812L8.59114 13.8089ZM11.9949 14.4971C12.8229 14.4971 13.4942 13.8258 13.4942 12.9978C13.4942 12.1698 12.8229 11.4985 11.9949 11.4985C11.1669 11.4985 10.4957 12.1698 10.4957 12.9978C10.4957 13.8258 11.1669 14.4971 11.9949 14.4971Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderSettingsLine'

/**
 * Remix Icon: Folder Settings Line
 * @see {@link https://remixicon.com/icon/folder-settings-line Remix Icon Docs}
 */
export const FolderSettingsLine = memo(Icon)
