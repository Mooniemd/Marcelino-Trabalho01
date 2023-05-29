"use client"
import styles from './page.module.css'
import Link from 'next/link';

export default async function Home() {
  const req = await fetch("http://localhost:3003/alunos", {
    next:{revalidate:1},
  });
  const alunos = await req.json();
 
  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main className={styles.main}>

      <Link href="/cadastro" class="cadastro">CADASTRAR</Link>
      {alunos.map(aluno => (
        <div key={aluno.id} class="jamogba">
          <p>{aluno.nome}</p>
          <p class="curso">{aluno.curso}</p>
          <p>{aluno.num_inscricao}</p>
          <button class="btn" onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button>
        </div>
      ))}
    </main>
  )
}
