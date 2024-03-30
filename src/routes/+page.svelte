<script lang="ts">
    import { Button } from "$lib/index.js";

    let theme = $state('light')

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light'

        if (theme === 'light') {
            window.document.documentElement.dataset.theme = 'light';
        } else {
            window.document.documentElement.dataset.theme = 'dark';
        }
    }
</script>

<Button onclick={toggleTheme}>
	Switch themes
</Button>

<div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
    <Button>Hello</Button>
    <Button size='lg'>Size LG</Button>
    <Button color='red'>Red</Button>
    <Button color='green'>Green</Button>
    <Button color='green.600'>Green 600</Button>
</div>
