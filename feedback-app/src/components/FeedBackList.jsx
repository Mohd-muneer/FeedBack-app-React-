import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedBackList({feedback}) {

     if (!feedback || feedback.length===0) {
        return <p>no feed back yet</p>
     }
     
  return (
    <div className="feedback-list"> 
    {feedback.map((item)=>(
      <FeedbackItem key={item.id} item={item} />
        // <div>{item.rating}</div>
    ))}
      
    </div>
  )
}

// FeedBackList.PropTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }

export default FeedBackList
