<script>
    import { page } from '$app/stores'
</script>

<div class="flex mx-auto w-max items-center h-96">
    <h6 class="text-5xl text-white border-r-gray-600 border-r pr-4 mr-4">{$page.status}</h6>
    <p class="text-md max-w-5xl text-gray-300 text-center">
        {$page.error?.message || "No error message provided..."}
    </p>
</div>