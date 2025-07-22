'use client';

import { useActionState } from 'react';
import { testAction } from './action';

export default function Home() {
  const [state, formAction] = useActionState(testAction, 'initial');

  return (
    <div>
      <h1>Test for open-next skew protection</h1>
      <p>
        {state}
      </p>
      <form action={formAction}>
        <button>Trigger Server Action</button>
      </form>
    </div>
  );
}
