// প্রাকটিস চ্যালেঞ্জ-১
// প্রতিদিন তোমার কাজ কি?
// ১) রাত ৮ টা বাজে মডিউল আনলক করো
// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো
// ৩) ভিডিও দেখতে দেখতে নোটস নাও
// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো
// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে), সাপোর্ট সেশনে জয়েন করো
// এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।
var task = ['1) Unlock Module on 8 pm.', '2) Watch video, practice module.', '3) Take notes while watching video.', '4) After watching all videos, practice again on your own.', '5) If you cant understand, join support session.',];
var understoodAll = true;
for (j = 0; j < 10; j++) {
    for (i = 0; i < task.length; i++) {
        if (i + 1 == task.length) {
            if (understoodAll == true) {
                continue;
            }
        }
        console.log(task[i]);
    }
    console.log('_________', j + 1, '_________')
}

// প্রাকটিস চ্যালেঞ্জ-২:
// উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও
var task = ['1) Unlock Module on 8 pm.', '2) Watch video, practice module.', '3) Take notes while watching video.', '4) After watching all videos, practice again on your own.', '5) If you cant understand, join support session.',];
var understoodAll = false;
for (j = 0; j < 10; j++) {
    for (i = task.length - 1; i >= 0; i--) {
        if (i + 1 == task.length) {
            if (understoodAll == true) {
                continue;
            }
        }
        console.log(task[i]);
    }
    console.log('_________', j + 1, '_________')
}