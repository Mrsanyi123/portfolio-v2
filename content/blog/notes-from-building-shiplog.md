---
title: Notes from building Shiplog
summary: A changelog product sounds small until you try to make it feel inevitable. These are the notes I keep coming back to.
publishedAt: 2026-06-02
tags: [building, product]
published: true
---

[Shiplog](https://sanyi.dev/projects) started as a sentence I was tired of writing by hand: you shipped the feature, now write the changelog.

The idea is simple. The product is not. Most of the work is taste — what to hide, what to generate, and when to get out of the user's way.

## Start from the last mile

I did not start with a platform. I started with the output.

If the changelog looks like a robot wrote it, nobody will post it. If it looks like a human wrote it but took an hour, nobody will keep using it. The product lives in that gap.

So the first question is not "can we parse the commits?" It is "would I paste this into Slack without editing it?"

## Do less, then make that feel complete

Early Shiplog wanted to do everything: release notes, social posts, versioning, analytics. That version would still be in Figma.

The useful version does one job well. You ship. We write what shipped. Everything else waits until that loop is sharp.

```ts
type ChangelogEntry = {
  title: string;
  summary: string;
  shippedAt: string;
};

function isReadyToPublish(entry: ChangelogEntry) {
  return entry.title.trim().length > 0 && entry.summary.trim().length > 12;
}
```

That is the bar. Not a platform. A sentence you can stand behind.

## Talk to users before you add a setting

Every time I wanted a toggle, I asked a user instead. Most of the time they did not want a toggle. They wanted the default to be better.

Settings are how products apologize for confusion. I would rather fix the default.

## Keep going

Shiplog is still early. That is the point of writing this down — so I remember what the product is for when the feature list gets loud.

If you are building something that feels "too small," it might be the right size. Small products that people actually use beat large products that exist as a deck.
