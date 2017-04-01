import Transition from '../components/transition'

export default class Buddy extends React.Component {
  render() {
    return (
      <div>
        <style jsx>{`

          h1 {
            color: red;
          }
          button {
            color: red;
          }

          `}
        </style>
        <h1>
          Hello buddy!
        </h1>
        <button>hi</button>
        <Transition />
      </div>

    )
  }
}
