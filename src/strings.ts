/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `Erro ao ler código, erro = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Erro ao pegar userMedia, erro = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "O dispositivo não tem suporte para navigator.mediaDevices";
    }

    public static cameraStreamingNotSupported(): string {
        return "O dispositivo não tem suporte para ler a camera.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Erro desconhecido.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Só é possível acessar a cámera em localhost ou HTTPS";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Escaneando";
    }

    public static idleStatus(): string {
        return "Parado";
    }

    public static errorStatus(): string {
        return "Erro";
    }

    public static permissionStatus(): string {
        return "Permissão";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Sem Cameras";
    }

    public static lastMatch(decodedText: string): string {
        return `Último scan: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Leitor de Códigos";
    }

    public static cameraPermissionTitle(): string {
        return "Abrir a Câmera";
    }

    public static cameraPermissionRequesting(): string {
        return "Solicitando permissões...";
    }

    public static noCameraFound(): string {
        return "Nenhuma camera achada";
    }

    public static scanButtonStopScanningText(): string {
        return "Parar Scan";
    }

    public static scanButtonStartScanningText(): string {
        return "Iniciar Scan";
    }

    public static scanButtonScanningStarting(): string {
        return "Abrindo camera...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Escanear um Arquivo";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Escanear com a camera";
    }

    public static selectCamera(): string {
        return "Escolher Camera";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static builtUsing(): string {
        return "Construído com ";
    }

    public static reportIssues(): string {
        return "Reportar erro";
    }
}
