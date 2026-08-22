/**
 * ============================================================
 *  إعدادات النظام
 * ============================================================
 *  ده الملف الوحيد اللي بتعدّله لو رابط الـ Deployment اتغير.
 *  index.html و admin.html الاتنين بيقروا منه.
 *
 *  إزاي تجيب الرابط الصح:
 *    Apps Script → Deploy → Manage deployments
 *    خد رابط الـ Web app بتاع النشر اللي حالته Active
 *
 *  ⚠️ لو عدّلت الكود في Apps Script، استخدم:
 *       Manage deployments → قلم التعديل → Version: New version → Deploy
 *     ومتضغطش "New deployment" أبداً — دي بتعمل رابط جديد وتسيب القديم شغال بكود قديم.
 * ============================================================
 */

const APP_API_URL = 'https://script.google.com/macros/s/AKfycbxew0UDHiXeetZMJyhd6t7jiX3igZ6fviqqlLJUQjVPqBuJ7aPbLIjuzKZs7ZdDsPuf/exec';
