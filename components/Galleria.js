import Head from 'next/head'

const scriptTest = () => (
  Galleria ?
  $("body").text('Galleria works')
  : $("body").text('NO Galleria')
)

const Galleria = () => (
    <div>
      <button onClick={scriptTest}>Test Script</button>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/galleria.min.js"></script>
      </Head>
    </div>
)

export default Galleria
