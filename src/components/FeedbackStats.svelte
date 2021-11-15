<script>
    import { FeedbackStore } from '../stores'

    $: count = $FeedbackStore.length
	$: average = Math.round(($FeedbackStore.reduce((a, { rating }) => a + rating, 0) / $FeedbackStore.length) * 100) / 100
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {count > 0 ? average : 'Not Available'}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>