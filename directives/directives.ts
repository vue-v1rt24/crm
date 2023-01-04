interface IOptions {
    arg: string,
    value: string | object;
}

declare var M: any;

export const toolTip = {
    created(el: HTMLElement, binding: IOptions): void {
        M.Tooltip.init(el, {
            position: binding.arg || 'top',
            html: binding.value,
        });
    },
    unmounted(el: HTMLElement) {
        const instance = M.Tooltip.getInstance(el);

        if (instance && instance.destroy) {
            instance.destroy();
        }
    },
};
