'use client';

export default function onRender(
  id: any,
  phase: any,
  actualDuration: any,
  baseDuration: any,
  startTime: any,
  commitTime: any,
) {
  console.log('🔍 id:', id);
  console.log('🔍 phase:', phase);
  console.log('🔍 actualDuration:', actualDuration);
  console.log('🔍 baseDuration:', baseDuration);
  console.log('🔍 startTime:', startTime);
  console.log('🔍 commitTime:', commitTime);
}
