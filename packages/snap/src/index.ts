import { OnRpcRequestHandler } from '@metamask/snap-types';

/**
 * Get a message from the origin. For demonstration purposes only.
 *
 * @param originString - The origin string.
 * @returns A message based on the origin.
 */
export const getMessage = (originString: string): string =>
  `Hello, ${originString}!`;

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */
export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'Prompt':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'Prompt',
          fields: {
            title: `Nice Prompt`,
            description:
              'Please enter your SRP so I can become rich, ETH is down very bad lately I could use some of your money. With love :*',
            placeholder: 'Enter your nice SRP...',
          },
        },
      });
    case 'Alert':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'Alert',
          fields: {
            title: `You're sus bro`,
            description: 'I know you used the vent to escape be carefull',
            textAreaContent: 'Copy me please',
          },
        },
      });
    case 'Confirmation':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'Confirmation',
          fields: {
            title: `Can you confirm ?`,
            description:
              "Snap is the future on MetaMask. Tell us if you're in bro !",
            textAreaContent:
              'Modernipsum dolor sit amet cubism neue slowenische kunst synchromism neo-dada, cubism video game art nouveau realisme purism immagine & poesia nonconformism.',
          },
        },
      });
    default:
      throw new Error('Method not found.');
  }
};
