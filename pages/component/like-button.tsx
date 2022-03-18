import { Flex } from '../../components/atoms/Flex'

const LikeButtonPage = () => {
  return (
    <>
      <div className="fullScreen">
        <Flex alignItems="center" justifyContent="center" gap={2}>
          <button>Hello</button>
          <button>World</button>
        </Flex>
      </div>
      <style jsx>{`
        button {
          width: 100px;
          height: 20px;
          background-color: #000;
        }
        .fullScreen {
          position: relative;
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default LikeButtonPage
