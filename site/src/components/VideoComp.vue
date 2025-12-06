<template>
    <div id="video_cont">
        <div id="video">
            <slot></slot>
        </div>
        <div>{{ desc }}</div>
    </div>
</template>

<style>
#video_cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap);

    background-color: var(--bg-light);
    padding: var(--padding);
    border-radius: var(--radius);
}

#video {
    width: 100%;
    border-radius: var(--radius);
}

#video > * {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
    background-color: black;
}
</style>

<script>
export default {
    name: "VideoComp",
    props: {
        desc: {
            type: String,
            required: true,
        },
    },
};
</script>
