import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>麻雀のアプリを作るぞ！</h1>
      <p>
        <Link href='/tenpai'>聴牌判定ページ</Link>
      </p>
      <p>
        <Link href='/hitori'>1人用ゲーム</Link>
      </p>
      <p>
        <Link href='/futari'>2人用対戦ゲーム</Link>
      </p>
    </main>
  );
}
