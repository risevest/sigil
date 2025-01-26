import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.67859 18.123C3.09315 16.5658 1.50098 14.112 1.50098 11.4052C1.50098 6.70096 6.24882 3 12.0009 3C17.753 3 22.501 6.70097 22.501 11.4052C22.501 16.1094 17.753 19.8104 12.0009 19.8104C11.5591 19.8104 11.1195 19.7883 10.6834 19.7446L6.91829 22.2026C6.3026 22.5286 5.96085 22.6281 5.4334 22.2685C4.8127 21.8453 4.83666 21.3768 5.05149 20.7096L5.67859 18.123ZM3.50098 11.4052C3.50098 13.5368 4.91871 15.5282 7.28204 16.7258L7.98846 17.0838L7.80187 17.8535L7.40093 19.5022L10.2003 17.6711L10.5665 17.7183C11.04 17.7794 11.5188 17.8104 12.0009 17.8104C16.7422 17.8104 20.501 14.8805 20.501 11.4052C20.501 7.92993 16.7422 5 12.0009 5C7.25967 5 3.50098 7.92991 3.50098 11.4052ZM17.908 11.0591L19.4215 13.214C19.5713 13.4273 19.5199 13.7217 19.3066 13.8714C19.2241 13.9293 19.1295 13.9573 19.0357 13.9573C18.8873 13.9573 18.741 13.8873 18.6491 13.7565L17.2213 11.7236L16.7937 12.1373V13.5C16.7937 13.7606 16.5825 13.9719 16.3218 13.9719C16.0613 13.9719 15.8499 13.7606 15.8499 13.5V12.0611C15.8325 11.9879 15.8321 11.9123 15.8499 11.8393V9.28226C15.8499 9.02172 16.0613 8.81038 16.3218 8.81038C16.5825 8.81038 16.7937 9.02172 16.7937 9.28226V10.8239L18.7219 8.95788C18.9094 8.77668 19.2081 8.78172 19.3893 8.96882C19.5705 9.15617 19.5656 9.45485 19.3783 9.63617L17.908 11.0591ZM14.9503 12.9839C15.211 12.9839 15.4222 13.1952 15.4222 13.4557C15.4222 13.7164 15.211 13.9276 14.9503 13.9276H13.0184C12.7579 13.9276 12.5467 13.7164 12.5467 13.4557V9.29702C12.5467 9.03648 12.7579 8.82514 13.0184 8.82514C13.2791 8.82514 13.4904 9.03648 13.4904 9.29702V12.9839H14.9503ZM9.09318 11.8925H10.4265L9.78919 10.1849L9.09318 11.8925ZM11.6159 12.3802L11.9612 13.3054C12.0524 13.5497 11.9284 13.8216 11.6842 13.9126C11.6298 13.9329 11.5741 13.9425 11.5193 13.9425C11.3278 13.9426 11.1479 13.8254 11.077 13.6356L10.7787 12.8364H8.70852L8.37749 13.6486C8.2792 13.89 8.00378 14.006 7.76242 13.9076C7.52107 13.8092 7.40519 13.5337 7.50348 13.2924L9.16453 9.21669C9.28066 8.93672 9.53948 8.76277 9.81761 8.77028C10.1005 8.77815 10.3468 8.9639 10.4452 9.24376L11.4906 12.0445C11.5687 12.1287 11.6175 12.2405 11.6175 12.3645C11.6175 12.3699 11.6161 12.3748 11.6159 12.3802ZM8.29446 9.30194C8.29446 9.56249 8.08312 9.77382 7.82258 9.77382H6.68212V13.5099C6.68212 13.7705 6.47078 13.9817 6.21012 13.9817C5.94957 13.9817 5.73824 13.7705 5.73824 13.5099V9.77382H4.57822C4.31755 9.77382 4.10622 9.56249 4.10622 9.30194C4.10622 9.0414 4.31755 8.83006 4.57822 8.83006H7.82258C8.08312 8.83006 8.29446 9.0414 8.29446 9.30194Z" />
    </Svg>
  )
}

Icon.displayName = 'KakaoTalkLine'

/**
 * Remix Icon: Kakao Talk Line
 * @see {@link https://remixicon.com/icon/kakao-talk-line Remix Icon Docs}
 */
export const KakaoTalkLine = memo(Icon)
