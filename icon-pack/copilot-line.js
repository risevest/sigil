import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.40051 7.7999C5.40051 5.71224 6.57782 4.80022 8.57168 4.80017C9.76759 4.80014 10.7005 5.06367 10.7005 6.39988C10.7005 8.21356 10.1264 10.1499 8.00051 10.1499C6.77216 10.1499 6.20265 9.97396 5.91113 9.72586C5.66394 9.51549 5.40051 9.05672 5.40051 7.7999ZM8.57163 2.80017C5.49709 2.80025 3.40051 4.6258 3.40051 7.7999C3.40051 8.79893 3.53783 9.68921 3.93013 10.4045L3.74781 10.7691C3.25056 11.0535 2.74122 11.4327 2.32288 11.8764C1.26166 13.0019 1.35046 14.2646 1.35046 15.6999C1.35046 17.9666 3.86212 19.3205 5.66543 20.0728C7.79841 20.9626 10.3423 21.4999 12.0005 21.4999C13.6586 21.4999 16.2025 20.9626 18.3355 20.0728C20.1388 19.3205 22.6505 17.9666 22.6505 15.6999C22.6505 14.2646 22.7393 13.0019 21.6781 11.8764C21.2597 11.4327 20.7504 11.0535 20.2532 10.7691L20.0709 10.4046C20.4632 9.68925 20.6005 8.79896 20.6005 7.7999C20.6005 4.6258 18.5039 2.80025 15.4294 2.80017C14.1881 2.80014 12.8109 3.05896 12.0005 4.08294C11.1902 3.05896 9.81287 2.80014 8.57163 2.80017ZM8.00051 12.1499C9.6929 12.1499 11.225 11.3348 12.0005 9.81554C12.776 11.3348 14.3081 12.1499 16.0005 12.1499C16.8955 12.1499 17.77 12.0761 18.5176 11.7702C19.0291 12.3662 19.6883 12.6814 20.2229 13.2484C20.8616 13.9259 20.6505 14.8326 20.6505 15.6999C20.6505 16.9718 18.4846 17.8435 17.5654 18.227C15.6234 19.0371 13.3423 19.4999 12.0005 19.4999C10.6586 19.4999 8.37748 19.0371 6.43547 18.227C5.51631 17.8435 3.35046 16.9718 3.35046 15.6999C3.35046 14.8326 3.13931 13.9259 3.77806 13.2484C4.33864 12.6538 5.1192 12.4985 5.48335 11.7702C6.23093 12.0761 7.10552 12.1499 8.00051 12.1499ZM13.3006 6.39988C13.3006 5.06367 14.2334 4.80014 15.4293 4.80017C17.4232 4.80022 18.6005 5.71224 18.6005 7.7999C18.6005 9.05672 18.3371 9.51549 18.0899 9.72586C17.7984 9.97396 17.2289 10.1499 16.0005 10.1499C13.8746 10.1499 13.3006 8.21356 13.3006 6.39988ZM8.6632 14.4841C8.6632 13.9312 9.11131 13.4829 9.66437 13.4829C10.2172 13.4829 10.6655 13.9312 10.6655 14.4841V16.4812C10.6655 17.0341 10.2174 17.4824 9.66437 17.4824C9.11131 17.4824 8.6632 17.0341 8.6632 16.4812V14.4841ZM15.3377 14.4841C15.3377 13.9312 14.8895 13.4829 14.3365 13.4829C13.7832 13.4829 13.3353 13.9314 13.3353 14.4841V16.4812C13.3353 17.0341 13.7834 17.4824 14.3365 17.4824C14.8895 17.4824 15.3377 17.0341 15.3377 16.4812V14.4841Z" />
    </Svg>
  )
}

Icon.displayName = 'CopilotLine'

/**
 * Remix Icon: Copilot Line
 * @see {@link https://remixicon.com/icon/copilot-line Remix Icon Docs}
 */
export const CopilotLine = memo(Icon)
