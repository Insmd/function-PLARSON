// ���������� ���������� ������� ��� �������� ������� ���������
(function () {
    // ������ ��� �������� �������, ������� ����� ��������� ����� �������� DOM
    var functions = [];
    // ����, �����������, ����� �� DOM
    var isReady = false;

    // ������� ��� ���������� ������� � ������ ��� ������������ �� ����������, ���� DOM �����
    function ready(fn) {
        if (isReady) {
            fn();
        } else {
            functions.push(fn);
        }
    }

    // ������� ��� ���������� ���� ������� � �������, ����� DOM ���������� �������
    function runReady() {
        if (!isReady) {
            isReady = true;
            while (functions.length) {
                functions.shift()();
            }
        }
    }

    // ���������, ����� �� DOM
    if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        // ���� DOM ��� �����, ���������� ��������� ��� �������
        window.setTimeout(runReady);
    } else {
        // ���� DOM ��� �� �����, ��������� ����������� ������� ��� ���������� �������, ����� �� ������ �������
        document.addEventListener("DOMContentLoaded", runReady);
        window.addEventListener("load", runReady);
    }

    // �������� $ �� ���� ������� ready
    window.$ = ready;
})();
