<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client';
	import { enhance } from '$app/forms';
	const user = getUser();
</script>

<p>This page is protected and can only be accessed by authenticated users.</p>
<pre class="code">
{JSON.stringify($user, null, 2)}
</pre>

<form use:enhance method="post">
	<input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Sign out" />
</form>
