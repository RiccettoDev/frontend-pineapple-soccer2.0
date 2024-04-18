import Layout from "../layout/Layout"
import Calendar from "../components/match/Calendar"

export default function Match() {
  return(
    <Layout>
      <div className="pt-32 flex flex-col items-center justify-center">
        <h1 className="text-white font-extrabold text-2xl lg:text-4xl">A Pelada vai começar</h1>
        <Calendar />
        <h1 className="text-white font-extrabold text-2xl lg:text-4xl">Partidas anteriores</h1>
      </div>
    </Layout>
  )
}